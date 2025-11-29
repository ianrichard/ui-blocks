import Block from "../components";

export default function BasicCardDemo() {
  return (
    <Block.Card innerSpace maxWidth={420}>
      <Block.Icon />
      <Block.Title>Basic Card</Block.Title>
      <Block.Text>
        This is a simple card with innerSpace padding. The Card component wraps
        content with optional shadows and borders.
      </Block.Text>
      <Block.Button>Learn More</Block.Button>
    </Block.Card>
  );
}
