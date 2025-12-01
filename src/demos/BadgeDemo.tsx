import Block from "../components";
import MantineBadge from "../components/Badge/MantineBadge";

export default function BadgeDemo() {
  return (
    <Block.Section column gap="xl">
      <Block.Section row gap="xs" outerSpaceBottom="md">
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
      <Block.Section row gap="xs">
        <MantineBadge size="xs">XS</MantineBadge>
        <MantineBadge size="sm">SM</MantineBadge>
        <MantineBadge size="md">MD</MantineBadge>
        <MantineBadge size="lg">LG</MantineBadge>
        <MantineBadge size="xl">XL</MantineBadge>
      </Block.Section>
    </Block.Section>
  );
}
