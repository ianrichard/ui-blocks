import Block from "../components";

export default function TypographyDemo() {
  return (
    <>
      <Block.Size compact>
        <Block.Title level1>Headline Compact 1</Block.Title>
        <Block.Title level2>Headline Compact 2</Block.Title>
        <Block.Title level3>Headline Compact 3</Block.Title>
        <Block.Title level4>Headline Compact 4</Block.Title>
        <Block.Title level5>Headline Compact 5</Block.Title>
        <Block.Title level6>Headline Compact 6</Block.Title>
        <Block.Text>Paragraph text</Block.Text>
      </Block.Size>
      <Block.Size>
        <Block.Title level1>Headline Default 1</Block.Title>
        <Block.Title level2>Headline Default 2</Block.Title>
        <Block.Title level3>Headline Default 3</Block.Title>
        <Block.Title level4>Headline Default 4</Block.Title>
        <Block.Title level5>Headline Default 5</Block.Title>
        <Block.Title level6>Headline Default 6</Block.Title>
        <Block.Text>Paragraph text</Block.Text>
      </Block.Size>
      <Block.Size cozy>
        <Block.Title level1>Headline Cozy 1</Block.Title>
        <Block.Title level2>Headline Cozy 2</Block.Title>
        <Block.Title level3>Headline Cozy 3</Block.Title>
        <Block.Title level4>Headline Cozy 4</Block.Title>
        <Block.Title level5>Headline Cozy 5</Block.Title>
        <Block.Title level6>Headline Cozy 6</Block.Title>
        <Block.Text>Paragraph text</Block.Text>
        <Block.Text>Paragraph text</Block.Text>
      </Block.Size>
    </>
  );
}
