import MantineBlock from "../components/Block/MantineBlock";
import MantineCodePreview from "../components/CodePreview/MantineCodePreview";
import { Demos } from "../demos";

export function MantineBlockDemo() {
  return (
    <MantineBlock innerSpace>
      {/* Basic Card Example */}
      <Demos.BasicCard.Demo />
      <MantineCodePreview src={Demos.BasicCard.source} title="Basic Card" />

      <Demos.CardWithImage.Demo />
      <MantineCodePreview
        src={Demos.CardWithImage.source}
        title="Card with Image"
      />

      <Demos.GridLayout.Demo />
      <MantineCodePreview src={Demos.GridLayout.source} title="Grid Layout" />

      <Demos.CardWithHeader.Demo />
      <MantineCodePreview
        src={Demos.CardWithHeader.source}
        title="Card with Header"
      />

      <Demos.BackgroundVariants.Demo />
      <MantineCodePreview
        src={Demos.BackgroundVariants.source}
        title="Background Variants"
      />

      <Demos.ButtonVariants.Demo />
      <MantineCodePreview
        src={Demos.ButtonVariants.source}
        title="Button Variants"
      />

      <Demos.Markdown.Demo />
      <MantineCodePreview src={Demos.Markdown.source} title="Button Variants" />

      <Demos.Typography.Demo />
      <MantineCodePreview
        src={Demos.Typography.source}
        title="Button Variants"
      />
    </MantineBlock>
  );
}
