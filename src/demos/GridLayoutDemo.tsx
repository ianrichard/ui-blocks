import Block from "../components";

export default function GridLayoutDemo() {
  return (
    <Block.Grid>
      {[1, 2, 3, 4].map((i) => (
        <Block.GridItem key={i} cols={4}>
          <Block.Card>
            <Block.Section innerSpace>
              <Block.Title size="sm" mt={0}>{`Card ${i}`}</Block.Title>
              <Block.Text>Grid layout example with multiple cards.</Block.Text>
            </Block.Section>
          </Block.Card>
        </Block.GridItem>
      ))}
    </Block.Grid>
  );
}
