import img1 from "../../../assets/client-1.avif";
import img2 from "../../../assets/client-2.avif";
import img3 from "../../../assets/client-3.avif";

type Testimonial = {
  id: string | number;
  stars: number;
  quote: string;
  image: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Carter",
    role: "CEO at TechFlow Solutions",
    image: img1,
    stars: 5,
    quote:
      "AI automation transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier!",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Operations Manager at NexaCorp",
    image: img2,
    stars: 5,
    quote:
      "With AI, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest!",
  },
  {
    id: 3,
    name: "David Reynolds",
    role: "Head of Sales at GrowthPeak",
    image: img3,
    stars: 5,
    quote:
      "AI-driven insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions!",
  },
  {
    id: 4,
    name: "Emily Wong",
    role: "Customer Success Lead at SupportHive",
    image: img1,
    stars: 5,
    quote:
      "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high, thanks to xtract",
  },
];
