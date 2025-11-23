# Block

The foundational component that serves as both base infrastructure and pattern wrapper.

## Philosophy

Block is the jQuery-like `$` of this component system - it's both:
- The base component that all other components use internally
- A namespace for sub-components: `Block.Card`, `Block.Image`, etc.

## Basic Usage

```tsx
import Block from '../components/Block/MantineBlock';

// Simple container
<Block>Content</Block>

// Flex row layout
<Block row gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
</Block>

// Flex column layout
<Block column gap="lg" inset="xl">
  <div>Item 1</div>
  <div>Item 2</div>
</Block>

// Grid layout
<Block grid cols={3} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Block>
```

## Layout Props

- `row` - Flex row direction
- `column` - Flex column direction
- `grid` - Grid display
- `gap` - Spacing between items (default: `"md"` for flex)
- `inset` - Internal padding

## Spacing Props

**Padding:** `p`, `px`, `py`, `pt`, `pb`, `pl`, `pr`  
**Margin:** `m`, `mx`, `my`, `mt`, `mb`, `ml`, `mr` (default: `my="md"`)

## Alignment Props

**Horizontal:** `left`, `right`, `center`, `justify`  
**Vertical:** `top`, `middle`, `bottom`

## Size Props

`width`, `height`, `minWidth`, `minHeight`

## Background Props

- `inverse` - Dark background with light text
- `secondary` - Light grey background

## Border Props

- `border`
- `borderLeft`, `borderRight`, `borderTop`, `borderBottom`

## Item Layout Props

- `fill` - Flex grow (maps to `flex="1"`)
- `col` - Column width control
