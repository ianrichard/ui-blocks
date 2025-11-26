import Block from "../components";

export default function GridLayoutDemo() {
  return (
    <Block.Grid cols={1} colsMd={2} colsLg={4}>
      {[1, 2, 3, 4].map((i) => (
        <Block.GridItem key={i}>
          <Block.Card>
            <Block.Section inset>
              <Block.Title size="sm" mt={0}>{`Card ${i}`}</Block.Title>
              <Block.Text>Grid layout example with multiple cards.</Block.Text>
            </Block.Section>
          </Block.Card>
        </Block.GridItem>
      ))}
    </Block.Grid>
  );
}
