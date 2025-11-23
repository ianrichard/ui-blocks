# Title

Heading component with size variants.

## Basic Usage

```tsx
import Block from '../components/Block/MantineBlock';

// Default title (large)
<Block.Title>Page Title</Block.Title>

// Different sizes
<Block.Title size="xl">Extra Large</Block.Title>
<Block.Title size="md">Medium</Block.Title>
<Block.Title size="sm">Small</Block.Title>

// Boolean size props
<Block.Title xl>Extra Large</Block.Title>
<Block.Title md>Medium</Block.Title>
```

## Props

- `size` - Size variant (default: `"lg"`)
- `mb` - Bottom margin (default: `"lg"`)
- `mt` - Top margin (default: `"lg"`)

## Bool Props

`xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` - Set size via boolean prop
