import Block from "../components";

export default function CardWithImageDemo() {
  return (
    <Block.Card sizeCozy>
      <Block.Section column rowLg alignMiddle>
        <Block.Image
          height={180}
          heightLg={320}
          heightXl={420}
          width="100%"
          widthLg={340}
          widthXl={500}
        />
        <Block.Section innerSpace>
          <Block.Section innerSpaceXl>
            <Block.Title>Card with Image</Block.Title>
            <Block.Text>
              Images can be placed inside cards. This example shows a card with
              an image at the top and content below with innerSpace padding.
            </Block.Text>
            <Block.ButtonGroup>
              <Block.Button>Primary</Block.Button>
              <Block.Button secondary>Secondary</Block.Button>
            </Block.ButtonGroup>
          </Block.Section>
        </Block.Section>
      </Block.Section>
    </Block.Card>
  );
}
