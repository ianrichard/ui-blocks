import MarkdownDemo from "../../demos/MarkdownDemo";
import markdownSource from "../../demos/MarkdownDemo.tsx?raw";
import MantineCodePreview from "../../components/CodePreview/MantineCodePreview";

export default function MarkdownDemoPage() {
  return (
    <>
      <MarkdownDemo />
      <MantineCodePreview src={markdownSource} title="Markdown" />
    </>
  );
}
