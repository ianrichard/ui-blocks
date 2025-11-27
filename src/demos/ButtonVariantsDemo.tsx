import Block from "../components";

export default function ButtonVariantsDemo() {
  return (
    <Block.Card innerSpace>
      <Block.Title>Button Variants</Block.Title>
      <Block.ButtonGroup>
        <Block.Button>Primary</Block.Button>
        <Block.Button secondary>Secondary</Block.Button>
        <Block.Button tertiary>Tertiary</Block.Button>
        <Block.Button hollow>Hollow</Block.Button>
        <Block.Button destructive>Destructive</Block.Button>
      </Block.ButtonGroup>
    </Block.Card>
  );
}
