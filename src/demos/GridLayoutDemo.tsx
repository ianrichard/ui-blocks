import Block from "../components";

export default function GridLayoutDemo() {
  return (
    <Block.Grid>
      {[1, 2, 3, 4].map((i) => (
        <Block.GridItem
          key={i}
          columns={12}
          columnsMd={6}
          columnsLg={4}
          columnsXl={3}
        >
          <Block.Card>
            <Block.Section innerSpace>
              <Block.Title level4>{`Card ${i}`}</Block.Title>
              <Block.Text>Grid layout example with multiple cards.</Block.Text>
            </Block.Section>
          </Block.Card>
        </Block.GridItem>
      ))}
    </Block.Grid>
  );
}
