import Block from "../components";

export default function BackgroundVariantsDemo() {
  return (
    <Block.Section row gap="xl">
      <Block.Card innerSpace="lg" backgroundInverse>
        <Block.Title>Inverse Background</Block.Title>
        <Block.Text>Dark background with light text</Block.Text>
        <Block.Button>Action</Block.Button>
      </Block.Card>
      <Block.Card innerSpace backgroundSecondary>
        <Block.Title>Secondary Background</Block.Title>
        <Block.Text>Light grey background</Block.Text>
        <Block.Button>Action</Block.Button>
      </Block.Card>
    </Block.Section>
  );
}
