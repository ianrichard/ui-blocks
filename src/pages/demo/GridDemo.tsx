import GridLayoutDemo from "../../demos/GridLayoutDemo";
import gridLayoutSource from "../../demos/GridLayoutDemo.tsx?raw";
import MantineCodePreview from "../../components/CodePreview/MantineCodePreview";

export default function GridDemo() {
  return (
    <>
      <GridLayoutDemo />
      <MantineCodePreview src={gridLayoutSource} title="Grid Layout" />
    </>
  );
}
