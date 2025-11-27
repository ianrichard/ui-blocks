import Block from "../components";

export default function CardWithImageDemo() {
  return (
    <Block.Size cozy>
      <Block.Card rowXl middle>
        <Block.Image height={180} heightLg={320} width="100%" widthXl={340} />
        <Block.Section innerSpace>
          <Block.Title>Card with Image</Block.Title>
          <Block.Text>
            Images can be placed inside cards. This example shows a card with an
            image at the top and content below with innerSpace padding.
          </Block.Text>
          <Block.ButtonGroup>
            <Block.Button>Primary</Block.Button>
            <Block.Button secondary>Secondary</Block.Button>
          </Block.ButtonGroup>
        </Block.Section>
      </Block.Card>
    </Block.Size>
  );
}
