# Code Preview System

## Overview

This project uses **Vite's `?raw` import** feature to automatically extract source code from demo components for display in code previews. This eliminates code duplication and ensures the displayed code is always in sync with the actual rendered components.

## How It Works

### 1. Create Isolated Demo Components

Demo components live in `src/explorer/demos/` and contain only the code you want to showcase:

```tsx
// src/explorer/demos/ButtonVariantsDemo.tsx
import { Block } from '../../blocks';

export function ButtonVariantsDemo({ block, disabled, loading }) {
    return (
        <Block.Stack gap="md">
            <Block.Button primary block={block} disabled={disabled} loading={loading}>
                Primary Action
            </Block.Button>
            {/* ... more buttons ... */}
        </Block.Stack>
    );
}
```

### 2. Import as Both Component and Raw Text

In your page component, import the demo twice:
- Once as a regular component
- Once with `?raw` suffix to get the source code as a string

```tsx
// src/explorer/pages/ButtonPage.tsx
import { ButtonVariantsDemo } from '../demos/ButtonVariantsDemo';
import buttonDemoCode from '../demos/ButtonVariantsDemo.tsx?raw';

export function ButtonPage() {
    return (
        <CodePreview code={buttonDemoCode}>
            <ButtonVariantsDemo />
        </CodePreview>
    );
}
```

### 3. Display with Syntax Highlighting

The `CodePreview` component automatically:
- Renders the live demo
- Shows the source code with syntax highlighting
- Provides copy-to-clipboard functionality
- Allows toggling code visibility

## Benefits

✅ **Single Source of Truth** - Code is written once  
✅ **Always in Sync** - No manual duplication  
✅ **Type Safe** - Full TypeScript support  
✅ **Build-Time** - No runtime overhead  
✅ **Clean Demos** - Demo files contain only the relevant code  

## File Structure

```
src/
├── explorer/
│   ├── demos/              # Isolated demo components
│   │   ├── ButtonVariantsDemo.tsx
│   │   ├── TypographyDemo.tsx
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── ButtonPage.tsx
│   │   └── ...
│   └── components/
│       └── CodePreview.tsx # Renders demos + code
```

## Creating New Demos

1. Create a new file in `src/explorer/demos/YourDemo.tsx`
2. Export a component that uses only `<Block>` components
3. Import it in your page with both regular and `?raw` imports
4. Wrap in `<CodePreview>`

Example:

```tsx
// 1. Create demo
// src/explorer/demos/MyDemo.tsx
export function MyDemo() {
    return <Block.Card>Hello</Block.Card>;
}

// 2. Use in page
// src/explorer/pages/MyPage.tsx
import { MyDemo } from '../demos/MyDemo';
import myDemoCode from '../demos/MyDemo.tsx?raw';

<CodePreview code={myDemoCode}>
    <MyDemo />
</CodePreview>
```

## TypeScript Support

The `?raw` import is typed via `src/vite-env.d.ts`:

```typescript
declare module '*?raw' {
    const content: string;
    export default content;
}
```

This provides full type safety for raw imports.
