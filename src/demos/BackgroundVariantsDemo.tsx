import Block from "../components";

export default function BackgroundVariantsDemo() {
  return (
    <Block.Section row gap>
      <Block.Card innerSpace fill backgroundInverse>
        <Block.Title>Inverse Background</Block.Title>
        <Block.Text>Dark background with light text</Block.Text>
        <Block.Button>Action</Block.Button>
      </Block.Card>
      <Block.Card innerSpace fill backgroundSecondary>
        <Block.Title>Secondary Background</Block.Title>
        <Block.Text>Light grey background</Block.Text>
        <Block.Button>Action</Block.Button>
      </Block.Card>
    </Block.Section>
  );
}
