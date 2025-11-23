# Avatar

Avatar component with size variants.

## Basic Usage

```tsx
import Block from '../components/Block/MantineBlock';

// Default avatar with placeholder
<Block.Avatar />

// Custom avatar
<Block.Avatar url="https://example.com/avatar.jpg" />

// Different sizes
<Block.Avatar size="lg" />
<Block.Avatar size="sm" />

// Boolean size props
<Block.Avatar sizeLg />
<Block.Avatar sizeSm />
```

## Props

- `url` - Avatar image URL (defaults to placeholder)
- `size` - Size variant (default: `"md"`)
- `alt` - Alt text

## Bool Props

`sizeXxs`, `sizeXs`, `sizeSm`, `sizeMd`, `sizeLg`, `sizeXl`, `sizeXxl` - Set size via boolean prop
