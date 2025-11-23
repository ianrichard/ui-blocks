# Link

Link component wrapper.

## Basic Usage

```tsx
import Block from '../components/Block/MantineBlock';

// Default link (underlined)
<Block.Link href="/path">Click here</Block.Link>

// Link without underline
<Block.Link href="/path" underlined={false}>Click here</Block.Link>
```

## Props

- `href` - Link URL (required)
- `underlined` - Show underline (default: `true`)
