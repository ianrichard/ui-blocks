/**
 * Demo code snippets for use in documentation and examples
 * Each snippet is a TypeScript const string containing JSX code
 */

export const basicCard = `<Block.Card inset="lg" shadow="md">
  <Block.Title>Basic Card with Inset</Block.Title>
  <Block.Text>
    This is a simple card with inset padding. The Block.Card component wraps content
    with optional shadows and borders.
  </Block.Text>
  <Block.Button>Learn More</Block.Button>
</Block.Card>`;

export const cardWithImage = `<Block.Card shadow="md">
  <Block.Image height={200} />
  <Block inset>
    <Block.Title size="md">Card with Image</Block.Title>
    <Block.Text>
      Images can be placed inside cards. This example shows a card with an image
      at the top and content below with inset padding.
    </Block.Text>
    <Block row mb={0}>
      <Block.Button>Primary</Block.Button>
      <Block.Button secondary>Secondary</Block.Button>
    </Block>
  </Block>
</Block.Card>`;

export const horizontalCard = `<Block.Card gap="lg" row shadow="md" middle>
  <Block.Image width={300} height={200} />
  <Block inset fill>
    <Block.Title size="md">Horizontal Card</Block.Title>
    <Block.Text>
      Cards can be arranged horizontally using the row prop. This creates a
      flexible layout perfect for media-rich content.
    </Block.Text>
    <Block row>
      <Block.Button>Action</Block.Button>
      <Block.Button hollow>Cancel</Block.Button>
    </Block>
  </Block>
</Block.Card>`;

export const gridLayout = `<Block grid cols={3} gap="md">
  {[1, 2, 3].map((i) => (
    <Block.Card key={i} inset="md" shadow="sm">
      <Block.Title size="sm" mt={0}>Card {i}</Block.Title>
      <Block.Text>Grid layout example with multiple cards.</Block.Text>
    </Block.Card>
  ))}
</Block>`;

export const cardWithHeader = `<Block.Card shadow="md">
  <Block inset="lg" row middle justify borderBottom>
    <Block.Title size="md" mb={0}>Card with Header</Block.Title>
    <Block.Icon name="IconSettings" onClick={() => alert('Settings clicked!')} />
  </Block>
  <Block inset="lg">
    <Block.Text>
      This card demonstrates a header section with a title and action icon,
      separated by a bottom border.
    </Block.Text>
    <Block row gap="sm" middle>
      <Block.Avatar size="sm" />
      <Block column gap={0}>
        <Block.Text mb={0}>John Doe</Block.Text>
        <Block.Text size="sm" muted mb={0}>Software Engineer</Block.Text>
      </Block>
    </Block>
  </Block>
</Block.Card>`;

export const backgroundVariants = `<Block row gap="md">
  <Block.Card fill inset="lg" inverse>
    <Block.Title size="sm" mt={0}>Inverse Background</Block.Title>
    <Block.Text>Dark background with light text</Block.Text>
  </Block.Card>
  <Block.Card fill inset="lg" secondary>
    <Block.Title size="sm" mt={0}>Secondary Background</Block.Title>
    <Block.Text>Light grey background</Block.Text>
  </Block.Card>
</Block>`;

export const buttonVariants = `<Block.Card inset="lg" shadow="md">
  <Block.Title size="md" mt={0}>Button Variants</Block.Title>
  <Block row gap="sm">
    <Block.Button>Primary</Block.Button>
    <Block.Button secondary>Secondary</Block.Button>
    <Block.Button tertiary>Tertiary</Block.Button>
    <Block.Button hollow>Hollow</Block.Button>
    <Block.Button destructive>Destructive</Block.Button>
  </Block>
</Block.Card>`;

