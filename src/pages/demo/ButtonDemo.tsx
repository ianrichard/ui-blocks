import ButtonVariantsDemo from "../../demos/ButtonVariantsDemo";
import buttonVariantsSource from "../../demos/ButtonVariantsDemo.tsx?raw";
import MantineCodePreview from "../../components/CodePreview/MantineCodePreview";

export default function ButtonDemo() {
  return (
    <>
      <ButtonVariantsDemo />
      <MantineCodePreview src={buttonVariantsSource} title="Button Variants" />
    </>
  );
}
