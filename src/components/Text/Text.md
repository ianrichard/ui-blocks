# Text

Regular text component with size variants and muted option.

## Basic Usage

```tsx
import Block from '../components/Block/MantineBlock';

// Default text
<Block.Text>Regular paragraph text</Block.Text>

// Muted text
<Block.Text muted>Secondary information</Block.Text>

// Different sizes
<Block.Text size="lg">Large text</Block.Text>
<Block.Text size="sm">Small text</Block.Text>

// Boolean size props
<Block.Text lg>Large text</Block.Text>
<Block.Text sm>Small text</Block.Text>
```

## Props

- `size` - Size variant (default: `"md"`)
- `muted` - Dimmed text color
- `mb` - Bottom margin

## Bool Props

`xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` - Set size via boolean prop
