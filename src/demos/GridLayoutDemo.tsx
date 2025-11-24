import Block from "../components";

export default function GridLayoutDemo() {
  return (
    <Block grid cols={3}>
      {[1, 2, 3].map((i) => (
        <Block.Card key={i}>
          <Block.Title size="sm" mt={0}>{`Card ${i}`}</Block.Title>
          <Block.Text>Grid layout example with multiple cards.</Block.Text>
        </Block.Card>
      ))}
    </Block>
  );
}
