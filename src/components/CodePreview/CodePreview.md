# CodePreview Component

The `CodePreview` component is used to display syntax-highlighted code snippets. It uses `react-syntax-highlighter` under the hood.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | The source code to display |
| `language` | `string` | `'tsx'` | The language for syntax highlighting |
| `title` | `string` | - | Optional title displayed in a header bar |

## Usage

```tsx
import Block from '../Block';

const code = `const hello = "world";`;

<Block.CodePreview src={code} title="Example Code" />
```
