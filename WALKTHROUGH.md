# Snippets and CodePreview Implementation

I have implemented a snippets system to easily share and display code examples in the demo application, with full support for rendering React components inside markdown.

## Changes

### 1. Snippets System
- Created `src/snippets/index.ts` to store reusable demo code as TypeScript const strings.
- This allows for a single source of truth for demo code and easy importing.

### 2. CodePreview Component
- Created `Block.CodePreview` (`src/components/CodePreview/MantineCodePreview.tsx`).
- Uses `react-syntax-highlighter` to display syntax-highlighted code.
- Supports custom titles and languages.

### 3. Markdown Component
- Created `Block.Markdown` (`src/components/Markdown/MantineMarkdown.tsx`).
- Uses `markdown-to-jsx` to render markdown content.
- **Key Feature**: Registers `Block` component in overrides.
- **Robustness**: Implements a pre-processing step to replace dot-notation tags (e.g., `<Block.Card>`) with unique tag names (e.g., `<BlockCard>`) before parsing. This ensures reliable rendering across different environments where dot-notation in XML tags might be problematic for the parser.
- Maps standard markdown elements to `Block` components (e.g., `h1` -> `Block.Title`, `img` -> `Block.Image`).
- Supports fenced code blocks using `Block.CodePreview`.

### 4. Demo Page Update
- Updated `MantineBlockDemo.tsx` to use the new system.
- Replaced hardcoded examples with `Block.Markdown` and `Block.CodePreview` pairs.

## Verification

- **Linting**: Ran `npm run lint` and fixed all issues.
- **Component Registration**: Verified that `markdown-to-jsx` is configured to handle `Block` components via overrides and pre-processing.
