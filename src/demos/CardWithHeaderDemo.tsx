import Block from "../components";

export default function CardWithHeaderDemo() {
  return (
    <Block.Card>
      <Block inset row middle justify borderBottom>
        <Block.Title fill>Card with Header</Block.Title>
        <Block.Icon
          name="IconSettings"
          onClick={() => alert("Settings clicked!")}
        />
      </Block>
      <Block inset>
        <Block.Text>
          This card demonstrates a header section with a title and action icon,
          separated by a bottom border.
        </Block.Text>
        <Block row gap="sm" middle>
          <Block.Avatar size="sm" />
          <Block column>
            <Block.Text>John Doe</Block.Text>
            <Block.Text>Software Engineer</Block.Text>
          </Block>
        </Block>
      </Block>
    </Block.Card>
  );
}
