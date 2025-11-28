import BackgroundVariantsDemo from "../../demos/BackgroundVariantsDemo";
import backgroundVariantsSource from "../../demos/BackgroundVariantsDemo.tsx?raw";
import MantineCodePreview from "../../components/CodePreview/MantineCodePreview";
import Block from "../../components";

export default function BackgroundDemo() {
  return (
    <Block.Section column gap>
      <BackgroundVariantsDemo />
      <Block.Card maxWidth={640}>
        <MantineCodePreview
          src={backgroundVariantsSource}
          title="Background Variants"
        />
      </Block.Card>
    </Block.Section>
  );
}
