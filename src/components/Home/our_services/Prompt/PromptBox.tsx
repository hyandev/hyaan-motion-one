import {
  GlowOrbContainer,
  BigCircle,
  SmallCircle,
} from "../../../common/GlowOrb";
import PromptInput from "./PromptInput";
import ActionToolbar from "./ActionToolbar";
import { Container, Paragraph, Title } from "../../../common/Title";
import FeatureCardContainer from "../../../common/FeatureCardContainer";

const PromptBox = () => {
  return (
    <FeatureCardContainer>
      <div>
        <GlowOrbContainer className="mx-auto size-15">
          <BigCircle
            className="size-15"
            custom={{ clockwise: true, speed: 6 }}
          />
          <SmallCircle
            className="top-1/2 left-1/2 size-10 -translate-1/2"
            custom={{ clockwise: false, speed: 6 }}
          />
        </GlowOrbContainer>
        <Container className="mt-4 w-full opacity-80">
          <Title as="h4" className="mb-2.5 text-center">
            What can I help with?
          </Title>
          <Paragraph className="text-neutral-surface mx-auto max-w-6/10 text-center text-[10px]">
            Weather you want help in customer handling or make changes in your
            system just give me command
          </Paragraph>
        </Container>
      </div>
      <PromptInput />
      <ActionToolbar />
    </FeatureCardContainer>
  );
};

export default PromptBox;
