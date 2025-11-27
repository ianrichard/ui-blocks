import Block from "../components";

export default function BackgroundVariantsDemo() {
  return (
    <Block.Section row gap middle>
      <Block.Card fill innerSpace="lg" backgroundInverse>
        <Block.Title size="sm" mt={0}>
          Inverse Background
        </Block.Title>
        <Block.Text>Dark background with light text</Block.Text>
      </Block.Card>
      <Block.Card fill innerSpace="lg" backgroundSecondary>
        <Block.Title size="sm" mt={0}>
          Secondary Background
        </Block.Title>
        <Block.Text>Light grey background</Block.Text>
      </Block.Card>
    </Block.Section>
  );
}
