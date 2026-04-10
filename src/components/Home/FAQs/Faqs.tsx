import { ChevronDown } from "lucide-react";
import { Accordion } from "../../common/Accordion";
import { Badge, Container, Paragraph, Title } from "../../common/Title";
import { HeaderVariants } from "../../common/Variants";
import { faqs } from "./faqData";
import classNames from "classnames";

const Faqs = () => {
  return (
    <section
      id="faqs"
      className="my-container mt-20 flex flex-col gap-15 md:mt-40"
    >
      <Container
        as="header"
        initial="hidden"
        whileInView="visible"
        variants={HeaderVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto gap-2.5"
      >
        <Badge className="mx-auto">FAQs</Badge>
        <Title
          as="h2"
          className="mx-auto max-w-170 text-center text-2xl font-bold sm:text-[45px]"
        >
          We’ve Got the Answers You’re Looking For
        </Title>
        <Paragraph className="text-neutral-muted mx-auto text-center text-[16.8px] font-bold">
          Quick answers to your AI automation questions.
        </Paragraph>
      </Container>

      <div
        className={classNames(
          "overflow: hidden; mx-auto flex w-full max-w-195 flex-col gap-4",
          "bg-[linear-gradient(130deg,transparent,#1d1626,transparent)] bg-no-repeat",
        )}
      >
        <Accordion
          className="flex flex-col gap-3.5 bg-transparent text-white"
          multiple
        >
          {faqs.map((item) => (
            <Accordion.Item
              key={item.id}
              value={item.question}
              className={classNames(
                "group",
                "border-neutral-surface/15 rounded-lg border transition-all duration-300",
                "focus-within:outline-none",
                "focus-within:has-focus-visible:ring-2 focus-within:has-focus-visible:ring-white",
              )}
            >
              <Accordion.Trigger className="flex w-full cursor-pointer items-center justify-between p-4 text-left outline-none focus:outline-none">
                <span className="font-medium">{item.question}</span>
                <ChevronDown
                  size={18}
                  className="transition-transform duration-300 group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>

              <Accordion.Content
                hidden={false}
                className={classNames(
                  "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out data-[state=closed]:grid-rows-[0fr] data-[state=open]:grid-rows-[1fr]",
                )}
              >
                <div className="min-h-0 overflow-hidden">
                  <p className="text-neutral-muted p-4 pt-0 text-left text-[15px] font-semibold">
                    {item.answer}
                  </p>
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
