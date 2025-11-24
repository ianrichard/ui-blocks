import Block from "../components";

export default function BackgroundVariantsDemo() {
  return (
    <Block row gap="md">
      <Block.Card fill inset="lg" inverse>
        <Block.Title size="sm" mt={0}>
          Inverse Background
        </Block.Title>
        <Block.Text>Dark background with light text</Block.Text>
      </Block.Card>
      <Block.Card fill inset="lg" secondary>
        <Block.Title size="sm" mt={0}>
          Secondary Background
        </Block.Title>
        <Block.Text>Light grey background</Block.Text>
      </Block.Card>
    </Block>
  );
}
