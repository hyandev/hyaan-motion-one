import { useEffect, useMemo, useRef, useState } from "react";

const PARTICLE_SIZE = 0.7;
const FADE_IN_DELAY = 2000;
const OPACITY_DECAY = 0.01;

type Props = {
  x: number;
  y: number;
  width: number;
  height: number;
  particles: number;
  containerHeight: number;
};

interface ParticleConfig {
  originalX: number;
  originalY: number;
  targetX: number;
  targetY: number;
  opacity?: number;
}

class Particle {
  public x: number;
  public y: number;
  public originalX: number;
  public originalY: number;
  public targetX: number;
  public targetY: number;
  public opacity: number;
  public vx: number;
  public vy: number;
  public dist: number;
  public isResetting: boolean;
  private timeoutId: ReturnType<typeof setTimeout> | null = null;

  constructor({
    originalX,
    originalY,
    targetX,
    targetY,
    opacity = 1,
  }: ParticleConfig) {
    this.originalX = originalX;
    this.originalY = originalY;
    this.x = originalX;
    this.y = originalY;
    this.targetX = targetX;
    this.targetY = targetY;
    this.opacity = opacity;
    this.isResetting = false;

    const dx = targetX - originalX;
    const dy = targetY - originalY;
    this.dist = Math.sqrt(dx * dx + dy * dy);

    this.vx = this.dist > 0 ? dx / this.dist : 0;
    this.vy = this.dist > 0 ? dy / this.dist : 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.beginPath();
    ctx.arc(this.x, this.y, PARTICLE_SIZE, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.restore();
  }

  cleanup() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  update(currentProps: Props) {
    const dx = this.targetX - this.x;
    const dy = this.targetY - this.y;

    const distSq = dx * dx + dy * dy;
    const speed = distSq < 0.04 ? Math.sqrt(distSq) : 0.2;

    this.y += this.vy * speed;
    this.x += this.vx * speed;

    if (
      !this.isResetting &&
      this.x >= currentProps.x &&
      this.x <= currentProps.x + currentProps.width &&
      this.y >= currentProps.y &&
      this.y <= currentProps.y + currentProps.height
    ) {
      this.opacity -= OPACITY_DECAY;
    }

    if (this.opacity <= 0 && !this.isResetting) {
      this.isResetting = true;
      this.opacity += OPACITY_DECAY;
      this.timeoutId = setTimeout(() => {
        this.opacity = 1;
        this.x = this.originalX;
        this.y = this.originalY;
        this.isResetting = false;
        this.timeoutId = null;
      }, FADE_IN_DELAY);
    }
  }
}

const Canvas = (props: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const propsRef = useRef<Props>(props);

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    propsRef.current = props;
  }, [props]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 250);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const particles = useMemo(() => {
    const arr: Particle[] = [];
    const centerX = props.x + props.width / 2;
    const centerY = props.y + props.height / 2;

    function getSafeSpawn(padding = windowSize.width > 768 ? 200 : 40) {
      let x: number, y: number, dist: number;
      let attempts = 0;
      const maxTry = 100;

      do {
        x = Math.random() * windowSize.width;
        y = Math.random() * props.containerHeight;
        const dx = x - centerX;
        const dy = y - centerY;
        dist = Math.sqrt(dx * dx + dy * dy);
        attempts++;
      } while (dist < props.width / 2 + padding && attempts < maxTry);

      return { x, y };
    }

    for (let i = 0; i < props.particles; i++) {
      const spawn = getSafeSpawn();
      arr.push(
        new Particle({
          originalX: spawn.x,
          originalY: spawn.y,
          targetX: centerX,
          targetY: centerY,
        }),
      );
    }

    return arr;
  }, [props.particles, props.containerHeight, windowSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    let animationId: number;
    function animate() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const particle of particles) {
        particle.update(propsRef.current);
        particle.draw(ctx!);
      }
      animationId = requestAnimationFrame(animate);
    }

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [windowSize, particles]);

  useEffect(() => {
    return () => {
      particles.forEach((p) => p.cleanup());
    };
  }, [particles]);

  return (
    <canvas
      data-testid="canvas"
      className="pointer-events-none absolute top-0 left-0"
      ref={canvasRef}
      style={{ contain: "layout paint" }}
    />
  );
};

export default Canvas;
