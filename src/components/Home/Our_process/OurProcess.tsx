import { Badge, Container, Paragraph, Title } from "../../common/Title";
import StepFourOptimization from "./step_four/StepFourOptimization";
import StepOneAnalyzing from "./step_one/StepOneAnalyzing";
import StepThreeIntegration from "./sterp_three/StepThreeIntegration";
import StepTwoDevelopment from "./step_two/StepTwoDevelopment";
import { HeaderVariants } from "../../common/Variants";

const OurProcess = () => {
  return (
    <section
      id="our-process"
      className="my-container mt-25 flex flex-col gap-15 md:mt-35"
    >
      <Container
        as="header"
        initial="hidden"
        whileInView="visible"
        variants={HeaderVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto gap-2.5"
      >
        <Badge className="mx-auto">Our Process</Badge>
        <Title
          as="h2"
          className="mx-auto max-w-170 text-center text-2xl font-bold sm:text-[45px]"
        >
          Our Simple, Smart, and Scalable Process
        </Title>
        <Paragraph className="text-neutral-muted mx-auto max-w-145 text-center font-bold sm:text-[16.8px]">
          We design, develop, and implement automation tools that help you work
          smarter, not harder
        </Paragraph>
      </Container>
      <div className="mx-auto grid w-full max-w-225 grid-cols-1 gap-4 md:grid-cols-2">
        <StepOneAnalyzing />
        <StepTwoDevelopment custom={0.2} />

        <StepThreeIntegration />
        <StepFourOptimization custom={0.2} />
      </div>
    </section>
  );
};

export default OurProcess;
