import Block from "../components";

export default function ButtonVariantsDemo() {
  return (
    <Block.Card innerSpace>
      <Block.Title>Button Variants</Block.Title>

      <Block.Card innerSpace>
        <Block.Title level4>Default</Block.Title>
        <Block.Text>Paragraph text</Block.Text>
        <Block.ButtonGroup>
          <Block.Button>Primary</Block.Button>
          <Block.Button secondary>Secondary</Block.Button>
          <Block.Button tertiary>Tertiary</Block.Button>
          <Block.Button hollow>Hollow</Block.Button>
          <Block.Button destructive>Destructive</Block.Button>
        </Block.ButtonGroup>
      </Block.Card>

      <Block.Card innerSpace backgroundSecondary>
        <Block.Title level4>Secondary</Block.Title>
        <Block.Text>Paragraph text</Block.Text>
        <Block.ButtonGroup>
          <Block.Button>Primary</Block.Button>
          <Block.Button secondary>Secondary</Block.Button>
          <Block.Button tertiary>Tertiary</Block.Button>
          <Block.Button hollow>Hollow</Block.Button>
          <Block.Button destructive>Destructive</Block.Button>
        </Block.ButtonGroup>
      </Block.Card>

      <Block.Card innerSpace backgroundInverse>
        <Block.Title level4>Inverse</Block.Title>
        <Block.Text>Paragraph text</Block.Text>
        <Block.ButtonGroup>
          <Block.Button>Primary</Block.Button>
          <Block.Button secondary>Secondary</Block.Button>
          <Block.Button tertiary>Tertiary</Block.Button>
          <Block.Button hollow>Hollow</Block.Button>
          <Block.Button destructive>Destructive</Block.Button>
        </Block.ButtonGroup>
      </Block.Card>
    </Block.Card>
  );
}
