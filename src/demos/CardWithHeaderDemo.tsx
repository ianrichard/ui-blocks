import Block from "../components";

export default function CardWithHeaderDemo() {
  return (
    <Block.Card>
      <Block.Section inset row middle justify borderBottom>
        <Block.Title fill>Card with Header</Block.Title>
        <Block.Icon
          name="IconSettings"
          onClick={() => alert("Settings clicked!")}
        />
      </Block.Section>
      <Block.Section inset>
        <Block.Text>
          This card demonstrates a header section with a title and action icon,
          separated by a bottom border.
        </Block.Text>
        <Block.Section row gap="sm" middle>
          <Block.Avatar size="lg" />
          <Block.Section column>
            <Block.Text span fw="bold">
              John Doe
            </Block.Text>
            <Block.Text>Software Engineer</Block.Text>
          </Block.Section>
        </Block.Section>
      </Block.Section>
    </Block.Card>
  );
}
