import TypographyDemo from "../../demos/TypographyDemo";
import typographySource from "../../demos/TypographyDemo.tsx?raw";
import MantineCodePreview from "../../components/CodePreview/MantineCodePreview";
import Block from "../../components";

export default function TypographyDemoPage() {
  return (
    <Block.Section column gap="xl">
      <TypographyDemo />
      <Block.Card>
        <MantineCodePreview src={typographySource} title="Typography" />
      </Block.Card>
    </Block.Section>
  );
}
