import Block from "../components";

export default function CardWithHeaderDemo() {
  const people = [
    { name: "John Doe", title: "Software Engineer" },
    { name: "Jane Smith", title: "Product Manager" },
    { name: "Alice Johnson", title: "UX Designer" },
    { name: "Bob Lee", title: "QA Analyst" },
    { name: "Maria Garcia", title: "Frontend Developer" },
  ];
  return (
    <Block.Card maxWidth={420}>
      <Block.Section innerSpace row alignMiddle borderBottom>
        <Block.Title fillSpace>Card with Header</Block.Title>
        <Block.Icon
          name="IconSettings"
          onClick={() => alert("Settings clicked!")}
        />
      </Block.Section>
      <Block.Section innerSpace innerSpaceTopBottom="lg" column gap="lg">
        <Block.Text>
          This card demonstrates a header section with a title and action icon,
          separated by a bottom border.
        </Block.Text>
        {people.map((person, index) => (
          <Block.Section row gap outerSpaceBottom alignMiddle key={index}>
            <Block.Avatar size="lg" />
            <Block.Section column>
              <Block.Text span fw="bold">
                {person.name}
              </Block.Text>
              <Block.Text>{person.title}</Block.Text>
            </Block.Section>
          </Block.Section>
        ))}
      </Block.Section>
    </Block.Card>
  );
}
