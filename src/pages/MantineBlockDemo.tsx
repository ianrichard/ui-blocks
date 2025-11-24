import MantineBlock from "../components/Block/MantineBlock";
import MantineCodePreview from "../components/CodePreview/MantineCodePreview";
import MantineMarkdown from "../components/Markdown/MantineMarkdown";
import { Demos } from "../demos";

export function MantineBlockDemo() {
  return (
    <MantineBlock gap="xl">
      {/* Basic Card Example */}
      <Demos.BasicCard.Demo />
      <MantineCodePreview src={Demos.BasicCard.source} title="Basic Card" />

      {/* Card with Image */}
      <Demos.CardWithImage.Demo />
      <MantineCodePreview
        src={Demos.CardWithImage.source}
        title="Card with Image"
      />

      {/* Horizontal Card Layout */}
      <Demos.HorizontalCard.Demo />
      <MantineCodePreview
        src={Demos.HorizontalCard.source}
        title="Horizontal Card"
      />

      {/* Grid Layout */}
      <Demos.GridLayout.Demo />
      <MantineCodePreview src={Demos.GridLayout.source} title="Grid Layout" />

      {/* Card with Header and Actions */}
      <Demos.CardWithHeader.Demo />
      <MantineCodePreview
        src={Demos.CardWithHeader.source}
        title="Card with Header"
      />

      {/* Background Variants */}
      <Demos.BackgroundVariants.Demo />
      <MantineCodePreview
        src={Demos.BackgroundVariants.source}
        title="Background Variants"
      />

      {/* Button Variants */}
      <Demos.ButtonVariants.Demo />
      <MantineCodePreview
        src={Demos.ButtonVariants.source}
        title="Button Variants"
      />

      <MantineMarkdown src="<Block><Block.Title>Hi</Block.Title></Block>" />
    </MantineBlock>
  );
}
