import Block from "../components";

export default function CardWithImageDemo() {
  return (
    <Block.Card col rowLg middle>
      <Block.Image height={240} width="100%" widthLg={340} />
      <Block inset>
        <Block.Title>Card with Image</Block.Title>
        <Block.Text>
          Images can be placed inside cards. This example shows a card with an
          image at the top and content below with inset padding.
        </Block.Text>
        <Block row>
          <Block.Button>Primary</Block.Button>
          <Block.Button secondary>Secondary</Block.Button>
        </Block>
      </Block>
    </Block.Card>
  );
}
