import Block from "../components";

export default function BasicCardDemo() {
  return (
    <Block.Size>
      <Block.Card inset border maxWidth={420}>
        <Block.Section>
          <Block.Icon />
          <Block.Title>Basic Card with Inset</Block.Title>
          <Block.Text>
            This is a simple card with inset padding. The Card component wraps
            content with optional shadows and borders.
          </Block.Text>
          <Block.Button>Learn More</Block.Button>
        </Block.Section>
      </Block.Card>
    </Block.Size>
  );
}
