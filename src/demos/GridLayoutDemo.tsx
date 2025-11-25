import Block from "../components";

export default function GridLayoutDemo() {
  return (
    <Block grid cols={4}>
      {[1, 2, 3].map((i) => (
        <Block.Card key={i} fill>
          <Block inset>
            <Block.Title size="sm" mt={0}>{`Card ${i}`}</Block.Title>
            <Block.Text>Grid layout example with multiple cards.</Block.Text>
          </Block>
        </Block.Card>
      ))}
      <Block.Card fill>
        <Block inset>
          <Block.Title size="sm" mt={0}>
            adslfkjasdf lkasdjf laksjdf{" "}
          </Block.Title>
          <Block.Text>
            Grid layout example with multiple cards alsdkfj asldkfj asldfkj
            asldfkj.
          </Block.Text>
        </Block>
      </Block.Card>
    </Block>
  );
}
