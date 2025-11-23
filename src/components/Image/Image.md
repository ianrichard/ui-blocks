# Image

Image component wrapper with placeholder support.

## Basic Usage

```tsx
import Block from '../components/Block/MantineBlock';

// Default image with placeholder
<Block.Image />

// Custom image
<Block.Image url="https://example.com/image.jpg" />

// Custom dimensions
<Block.Image url="..." width="100%" height={400} />

// Contain instead of cover
<Block.Image url="..." cover={false} />
```

## Props

- `url` - Image URL (defaults to placeholder)
- `width` - Image width (default: `"100%"`)
- `height` - Image height (default: `320`)
- `cover` - Object-fit cover (default: `true`)
- `alt` - Alt text
