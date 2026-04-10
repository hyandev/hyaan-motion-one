import { Badge, Container, Paragraph, Title } from "../../common/Title";
import { HeaderVariants } from "../../common/Variants";
import { ToggleSwitch } from "../../common/ToggleSwitch";
import classNames from "classnames";
import { useState } from "react";
import { pricingPlans } from "./pricingData";
import PlanCard from "./PlanCard";

const Pricing = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <section
      id="pricing"
      className="my-container mt-30 flex flex-col gap-15 md:mt-60"
    >
      <Container
        as="header"
        initial="hidden"
        whileInView="visible"
        variants={HeaderVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto gap-2.5"
      >
        <Badge className="mx-auto">Pricing</Badge>
        <Title
          as="h2"
          className="mx-auto max-w-170 text-center text-2xl font-bold sm:text-[45px]"
        >
          The Best AI Automation, at the Right Price
        </Title>
        <Paragraph className="text-neutral-muted mx-auto text-center text-[16.8px] font-bold">
          Choose a plan that fits your business needs and start automating with
          AI
        </Paragraph>
      </Container>
      <div
        className="flex items-center justify-center gap-2.5"
        id="checkbox:_r_4_:label"
      >
        <span
          className={classNames(
            "font-semibold",
            isOn ? "text-neutral-surface/70" : "text-neutral-surface",
          )}
        >
          Monthly
        </span>
        <ToggleSwitch defaultChecked={isOn} onCheckedChange={setIsOn}>
          <ToggleSwitch.Track
            className={classNames(
              "border-neutral-surface/25 group relative h-8 w-18 cursor-pointer rounded-2xl border transition-all duration-300 ease-in-out",
              "data-[state=checked]:bg-primary",
              "data-focus:border-neutral-surface/70",
            )}
          >
            <ToggleSwitch.Thumb
              className={classNames(
                "absolute top-1/2 aspect-square h-10/11 -translate-y-1/2 rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out",
                "left-0.5 data-[state=checked]:translate-x-10",
              )}
            />
          </ToggleSwitch.Track>
        </ToggleSwitch>
        <span
          className={classNames(
            "font-semibold",
            !isOn ? "text-neutral-surface/70" : "text-neutral-surface",
          )}
        >
          Annually
        </span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {pricingPlans.map((plan, i) => (
          <PlanCard key={plan.id} plan={plan} isOn={isOn} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
