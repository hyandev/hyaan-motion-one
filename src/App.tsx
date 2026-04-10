import { Routes, Route } from "react-router";
import Home from "./components/Home/Home";
import { ReactLenis, type LenisRef } from "lenis/react";
import "lenis/dist/lenis.css";
import { useRef } from "react";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Post from "./components/Blog/Post";
import Contact from "./components/Contact/Contact";

const App = () => {
  const lenisRef = useRef<LenisRef>(null);

  return (
    <div className="app">
      <ReactLenis
        ref={lenisRef}
        root
        options={{
          autoRaf: true,
          lerp: 0.12,
          syncTouch: false,
          anchors: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postSlug" element={<Post />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ReactLenis>
    </div>
  );
};

export default App;
