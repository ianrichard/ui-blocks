# Card

Simple card component that wraps content with optional shadows and borders.

## Philosophy

Card is just Block with preset styling - it inherits all Block props and adds card-specific features like shadows and borders.

## Basic Usage

```tsx
import Block from '../components/Block/MantineBlock';

// Simple card with inset padding
<Block.Card inset="lg" shadow="md">
  <Block.Title>Card Title</Block.Title>
  <Block.Text>Card content goes here</Block.Text>
</Block.Card>

// Card with image
<Block.Card shadow="md">
  <Block.Image />
  <Block inset="lg">
    <Block.Title>Title</Block.Title>
    <Block.Text>Content</Block.Text>
  </Block>
</Block.Card>

// Horizontal card layout
<Block.Card row shadow="md">
  <Block.Image width={300} />
  <Block inset="lg" fill>
    <Block.Title>Title</Block.Title>
    <Block.Text>Content</Block.Text>
  </Block>
</Block.Card>
```

## Props

- `shadow` - Shadow size: `"none"` | `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"`
- `border` - Show border
- `href` - Makes card a clickable link
- `onClick` - Makes card clickable

**Plus all Block props:** `row`, `column`, `gap`, `inset`, `fill`, etc.
