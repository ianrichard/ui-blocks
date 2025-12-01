import ButtonVariantsDemo from "../../demos/ButtonVariantsDemo";
import buttonVariantsSource from "../../demos/ButtonVariantsDemo.tsx?raw";
import MantineCodePreview from "../../components/CodePreview/MantineCodePreview";
import Block from "../../components";

export default function ButtonDemo() {
  return (
    <>
      <ButtonVariantsDemo />
      <Block.Card outerSpaceTop>
        <MantineCodePreview
          src={buttonVariantsSource}
          title="Button Variants"
        />
      </Block.Card>
    </>
  );
}
