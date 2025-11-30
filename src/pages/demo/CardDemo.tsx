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
    <>
      <Block.Section row gap="xl">
        <BasicCardDemo />
        <Block.Card width="100%" maxWidth={700}>
          <MantineCodePreview src={basicCardSource} title="Basic Card" />
        </Block.Card>
      </Block.Section>
      <CardWithImageDemo />
      <MantineCodePreview src={cardWithImageSource} title="Card with Image" />
      <CardWithHeaderDemo />
      <MantineCodePreview src={cardWithHeaderSource} title="Card with Header" />
    </>
  );
}
