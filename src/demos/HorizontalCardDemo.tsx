import Block from "../components";

export default function HorizontalCardDemo() {
  return (
    <Block.Card gap="lg" shadow="md" middle>
      <Block row middle>
        <Block.Image width={300} height={200} />
        <Block inset>
          <Block.Title size="md">Horizontal Card</Block.Title>
          <Block.Text>
            Cards can be arranged horizontally using the row prop. This creates
            a flexible layout perfect for media-rich content.
          </Block.Text>
          <Block row>
            <Block.Button>Action</Block.Button>
            <Block.Button hollow>Cancel</Block.Button>
          </Block>
        </Block>
      </Block>
    </Block.Card>
  );
}
