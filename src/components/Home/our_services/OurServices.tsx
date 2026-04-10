import classNames from "classnames";
import { Container, Badge, Title, Paragraph } from "../../common/Title";
import { HeaderVariants } from "../../common/Variants";
import FeatureVisual from "./FeatureVisual";
import EmailSendingPreview from "./EmailSendingPreview";
import ProjectScheduleCard from "./SchedulePlan/ProjectScheduleCard";
import { lazy } from "react";
const PromptBox = lazy(() => import("./Prompt/PromptBox"));

const tags = ["Leads", "Content", "Social post"];
const secondTags = ["Strategy", "Custom AI", "Consulting"];

const OurServices = () => {
  return (
    <section
      id="our-service"
      className={classNames(
        "our-services my-container",
        "flex flex-col justify-center",
        "py-15 md:py-25",
      )}
    >
      <Container
        as="header"
        initial="hidden"
        whileInView="visible"
        variants={HeaderVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto w-full"
      >
        <Badge className="mx-auto">Our Services</Badge>
        <Title className="w-full py-6 text-center text-4xl md:text-5xl">
          AI Solutions That Take Your Business to the Next Level
        </Title>
        <Paragraph className="text-neutral-muted text-center font-semibold sm:text-[18px]">
          We design, develop, and implement automation tools that help you work
          smarter, not harder
        </Paragraph>
      </Container>

      <div
        className={classNames(
          "mt-10 flex",
          "gap-8 max-[900px]:mx-auto max-[900px]:w-full max-[900px]:flex-col max-[900px]:items-center min-[900px]:justify-evenly",
        )}
      >
        <FeatureVisual />
        <Container
          as="div"
          className="mr-auto w-full gap-4 max-[900px]:mx-auto min-[900px]:max-w-125"
        >
          <Badge>Workflow Automation</Badge>
          <Title as="h3" className="text-3xl">
            Automate repetitive tasks
          </Title>
          <Paragraph className="text-neutral-surface max-w-110 text-sm font-medium">
            We help you streamline internal operations by automating manual
            workflows like data entry, reporting, and approval chains saving
            time and cutting down errors.
          </Paragraph>
          <div>
            <Badge className="mr-2.5">Internal Task Bots</Badge>
            <Badge>100+ Automations</Badge>
          </div>
        </Container>
      </div>

      <div
        className={classNames(
          "mt-10 flex",
          "gap-8 max-[900px]:mx-auto max-[900px]:w-full max-[900px]:flex-col max-[900px]:items-center min-[900px]:justify-evenly",
        )}
      >
        <Container
          as="div"
          className="flex w-full flex-col gap-6 text-white min-[900px]:max-w-125"
        >
          <Badge>AI Assistant</Badge>
          <Title as="h3" className="text-3xl">
            Delegate Daily Tasks
          </Title>
          <Paragraph className="text-neutral-surface max-w-110 text-sm font-medium">
            From managing calendars to drafting emails and summarizing meetings,
            our AI assistants work around the clock to keep your business
            running smarter and faster.
          </Paragraph>
          <div className="flex gap-3">
            <Badge>Summaries</Badge>
            <Badge>Scheduling</Badge>
            <Badge>Many more</Badge>
          </div>
        </Container>

        <PromptBox />
      </div>

      <div
        className={classNames(
          "mt-10 flex",
          "gap-8 max-[900px]:mx-auto max-[900px]:w-full max-[900px]:flex-col max-[900px]:items-center min-[900px]:justify-evenly",
        )}
      >
        <EmailSendingPreview />
        <Container className="flex w-full flex-col gap-6 min-[900px]:max-w-125">
          <Badge>Sales & Marketing</Badge>
          <Title as="h3" className="text-3xl">
            Accelerate Sales Growth
          </Title>
          <Paragraph className="text-neutral-surface max-w-110">
            AI tools for lead generation, personalized outreach, and automated
            content creation that scales your sales efforts and builds stronger
            brand presence.
          </Paragraph>
          <div className="flex gap-3">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </Container>
      </div>

      <div
        className={classNames(
          "mt-10 flex",
          "gap-8 max-[900px]:mx-auto max-[900px]:w-full max-[900px]:flex-col max-[900px]:items-center min-[900px]:justify-evenly",
        )}
      >
        <Container className="flex w-full flex-col gap-6 min-[900px]:w-6/10 min-[900px]:max-w-125">
          <Badge>Custom Projects</Badge>
          <Title as="h3" className="text-3xl">
            Build Smarter Systems
          </Title>
          <Paragraph className="text-neutral-surface max-w-110">
            Whether you're starting from scratch or enhancing an existing
            system, we offer strategic consulting and develop custom AI projects
            aligned with your unique goals.
          </Paragraph>
          <div className="flex gap-3">
            {secondTags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </Container>
        <ProjectScheduleCard />
      </div>
    </section>
  );
};

export default OurServices;
