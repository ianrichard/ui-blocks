# Markdown Component

The `Markdown` component renders markdown content using `react-markdown`. It maps standard markdown elements to `Block` components for a consistent design.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | The markdown content to render |
| `children` | `string` | - | Alternative way to pass markdown content |

## Features

- **Typography**: Headings and paragraphs use `Block.Title` and `Block.Text`.
- **Links**: Uses `Block.Link`.
- **Images**: Uses `Block.Image`.
- **Code Blocks**: Uses `Block.CodePreview` for fenced code blocks.
- **Blockquotes**: Styled using `Block` with secondary background.

## Usage

```tsx
import Block from '../Block';

const content = `
# Hello World
This is **markdown** content.
`;

<Block.Markdown src={content} />
```
