import { lazy, Suspense } from "react";

import Hero from "./hero/Hero";
import OurServices from "./our_services/OurServices";
import TrustedBy from "../common/TrustedBy";

const OurProcess = lazy(() => import("./Our_process/OurProcess"));
const CaseStudies = lazy(() => import("./Case_studies/CaseStudies"));
const Benefits = lazy(() => import("./benefits/Benefits"));
const Pricing = lazy(() => import("./pricing/Pricing"));
const Testimonials = lazy(() => import("./Testimonials/Testimonials"));
const Faqs = lazy(() => import("./FAQs/Faqs"));
const CTA = lazy(() => import("./CTA"));

const Home = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <OurServices />
      <Suspense fallback={null}>
        <OurProcess />
        <CaseStudies />
        <Benefits />
        <Pricing />
        <Testimonials />
        <Faqs />
        <CTA />
      </Suspense>
    </>
  );
};

export default Home;
