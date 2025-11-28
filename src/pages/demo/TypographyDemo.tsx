import TypographyDemo from "../../demos/TypographyDemo";
import typographySource from "../../demos/TypographyDemo.tsx?raw";
import MantineCodePreview from "../../components/CodePreview/MantineCodePreview";

export default function TypographyDemoPage() {
  return (
    <>
      <TypographyDemo />
      <MantineCodePreview src={typographySource} title="Typography" />
    </>
  );
}
