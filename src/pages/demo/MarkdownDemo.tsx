import MarkdownDemo from "../../demos/MarkdownDemo";
import markdownSource from "../../demos/MarkdownDemo.tsx?raw";
import MantineCodePreview from "../../components/CodePreview/MantineCodePreview";
import Block from "../../components";

export default function MarkdownDemoPage() {
  return (
    <Block.Section row gap>
      <MarkdownDemo />
      <Block.Card>
        <MantineCodePreview src={markdownSource} title="Markdown" />
      </Block.Card>
    </Block.Section>
  );
}
