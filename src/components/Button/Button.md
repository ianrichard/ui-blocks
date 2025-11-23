# Button

Button component with style variants.

## Basic Usage

```tsx
import Block from '../components/Block/MantineBlock';

// Primary button (default)
<Block.Button>Click Me</Block.Button>

// Style variants
<Block.Button secondary>Secondary</Block.Button>
<Block.Button tertiary>Tertiary</Block.Button>
<Block.Button hollow>Hollow</Block.Button>
<Block.Button destructive>Delete</Block.Button>

// Button as link
<Block.Button href="/path">Go to Page</Block.Button>
```

## Props

- `onClick` - Click handler
- `href` - Makes button a link
- `disabled` - Disabled state

## Bool Props

`secondary`, `tertiary`, `destructive`, `hollow` - Style variants (mutually exclusive)
