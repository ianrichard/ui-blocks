# Icon

Icon component using Tabler Icons with clickable support.

## Basic Usage

```tsx
import Block from '../components/Block/MantineBlock';

// Simple icon
<Block.Icon name="IconHeart" />

// Different sizes
<Block.Icon name="IconStar" size="lg" />
<Block.Icon name="IconSettings" size="sm" />

// Boolean size props
<Block.Icon name="IconHome" sizeLg />

// Clickable icon (button)
<Block.Icon name="IconX" onClick={() => console.log('clicked')} />

// Icon as link
<Block.Icon name="IconExternalLink" href="/path" />
```

## Props

- `name` - Tabler icon name (default: `"IconCircle"`)
- `size` - Size variant (default: `"md"`)
- `onClick` - Makes icon a button
- `href` - Makes icon a link

## Bool Props

`sizeXxs`, `sizeXs`, `sizeSm`, `sizeMd`, `sizeLg`, `sizeXl`, `sizeXxl` - Set size via boolean prop
