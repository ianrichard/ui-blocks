import GridLayoutDemo from "../../demos/GridLayoutDemo";
import gridLayoutSource from "../../demos/GridLayoutDemo.tsx?raw";
import MantineCodePreview from "../../components/CodePreview/MantineCodePreview";
import Block from "../../components";

export default function GridDemo() {
  return (
    <>
      <GridLayoutDemo />
      <Block.Card maxWidth={640}>
        <MantineCodePreview src={gridLayoutSource} title="Grid Layout" />
      </Block.Card>
    </>
  );
}
