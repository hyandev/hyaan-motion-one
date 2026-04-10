import TrustedBy from "../common/TrustedBy";
import CTA from "../Home/CTA";
import Faqs from "../Home/FAQs/Faqs";
import AboutContainer from "./AboutContainer";
import Identity from "./Identity";
import OurTeam from "./our team/OurTeam";
import OurValues from "./our values/OurValues";
import WhyUs from "./why us/WhyUs";

const About = () => {
  return (
    <section id="about" className="relative overflow-clip">
      <div className="flex h-[65vh] flex-col justify-center md:h-[88vh]">
        <AboutContainer />
        <TrustedBy />
      </div>
      <Identity />
      <OurValues />
      <WhyUs />
      <OurTeam />
      <Faqs />
      <CTA />
    </section>
  );
};

export default About;
