import Block from "../components";
import MantineBadge from "../components/Badge/MantineBadge";

export default function BadgeDemo() {
  return (
    <Block.Section outerSpace="xl">
      <Block.Title level={2} outerSpaceBottom="md">
        Badge
      </Block.Title>
      <Block.Section gap="md" outerSpaceBottom="md">
        <MantineBadge>Default</MantineBadge>
        <MantineBadge color="blue" variant="filled">
          Filled
        </MantineBadge>
        <MantineBadge color="red" variant="outline">
          Outline
        </MantineBadge>
        <MantineBadge color="green" variant="dot">
          Dot
        </MantineBadge>
      </Block.Section>
      <Block.Section gap="md">
        <MantineBadge size="xs">XS</MantineBadge>
        <MantineBadge size="sm">SM</MantineBadge>
        <MantineBadge size="md">MD</MantineBadge>
        <MantineBadge size="lg">LG</MantineBadge>
        <MantineBadge size="xl">XL</MantineBadge>
      </Block.Section>
    </Block.Section>
  );
}
