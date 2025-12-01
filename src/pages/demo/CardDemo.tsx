import BasicCardDemo from "../../demos/BasicCardDemo";
import basicCardSource from "../../demos/BasicCardDemo.tsx?raw";
import CardWithImageDemo from "../../demos/CardWithImageDemo";
import cardWithImageSource from "../../demos/CardWithImageDemo.tsx?raw";
import CardWithHeaderDemo from "../../demos/CardWithHeaderDemo";
import cardWithHeaderSource from "../../demos/CardWithHeaderDemo.tsx?raw";
import MantineCodePreview from "../../components/CodePreview/MantineCodePreview";
import Block from "../../components";

export default function CardDemo() {
  return (
    <Block.Section column gap="xl">
      <Block.Section row wrap gap="xl">
        <BasicCardDemo />
        <Block.Card fillSpace minWidth={400} maxWidth={640}>
          <MantineCodePreview src={basicCardSource} title="Basic Card" />
        </Block.Card>
      </Block.Section>
      <CardWithImageDemo />
      <Block.Card maxWidth={720}>
        <MantineCodePreview src={cardWithImageSource} title="Card with Image" />
      </Block.Card>
      <Block.Section row gap="xl">
        <CardWithHeaderDemo />
        <Block.Card>
          <MantineCodePreview
            src={cardWithHeaderSource}
            title="Card with Header"
            fillSpace
          />
        </Block.Card>
      </Block.Section>
    </Block.Section>
  );
}
