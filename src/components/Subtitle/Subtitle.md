# Subtitle

Subtitle component - extends Title with smaller default size.

## Basic Usage

```tsx
import Block from '../components/Block/MantineBlock';

// Default subtitle (medium)
<Block.Subtitle>Section Subtitle</Block.Subtitle>

// Different sizes
<Block.Subtitle size="lg">Large Subtitle</Block.Subtitle>
<Block.Subtitle size="sm">Small Subtitle</Block.Subtitle>

// Boolean size props
<Block.Subtitle lg>Large Subtitle</Block.Subtitle>
<Block.Subtitle sm>Small Subtitle</Block.Subtitle>
```

## Props

- `size` - Size variant (default: `"md"`)
- `mb` - Bottom margin (default: `"md"`)
- `mt` - Top margin (default: `"lg"`)

## Bool Props

`xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` - Set size via boolean prop
