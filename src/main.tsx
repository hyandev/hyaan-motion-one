import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Navbar from "./components/common/navbar/Navbar.tsx";
import { BrowserRouter } from "react-router";
import Footer from "./components/common/Footer.tsx";
import ScrollToTop from "./lib/ScrollToTop.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Navbar />
      <main>
        <App />
      </main>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
