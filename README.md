# Responsive Block Prop Framework

## A System for Design Systems

This library provides a mechanism for using responsive props at any breakpoint—including for children—enabling robust, dynamic UIs without the need for complicated DLS configuration or wrapped components with hooks. It acts as a framework above a DLS, handling much of the composition and scaffolding work.

Mantine is used as the underlying DLS for this proof of concept, but the goal is to support any DLS in the future.

> Example: `<Block.Section width={200} widthLg={400} />` will render with width 200 by default and width 400 at the `lg` breakpoint. The underlying code simply receives a resolved single resolved `width` prop. This means the DLS doesn't even have to know about the upstream code!

# Block System Overview

**Sample usage:**

```tsx
<Block.Section sizeCozy row gap>
  <Block.Card>Child 1</Block.Card>
  <Block.Card>Child 2</Block.Card>
</Block.Section>

// With explicit overrides:
<Block.Section gap="sm" gapMd="xl" row rowLg columnSm size="md" sizeLg="xl">
  <Block.Card>Responsive gap, direction, and size</Block.Card>
  <Block.Card size="sm">Child with overridden size</Block.Card>
</Block.Section>
```

- The gap, row/column, and size props change at breakpoints.
- Children inherit size unless overridden (see second Block.Text).

**Smart boolean props:**

- Many props (such as `row`, `innerSpace`, etc.) can be used as simple booleans. When set to `true`, they will default to either `'md'` or inherit the value from the parent context (such as the current `size`). This allows for very simple and readable component construction, while still supporting custom values for localized overrides when needed.

**Configurable Responsive Props:**

| Prop                                                             | Type           | Example Values   |
| ---------------------------------------------------------------- | -------------- | ---------------- |
| width, minWidth, maxWidth                                        | string/number  | 320, '100%'      |
| height, minHeight, maxHeight                                     | string/number  | 240, '50vh'      |
| columns                                                          | number         | 2, 3, 12         |
| gap                                                              | MantineSize    | 'sm', 'md', 'xl' |
| row, column                                                      | boolean        | true             |
| wrap                                                             | boolean        | true             |
| size                                                             | MantineSize    | 'xs', 'md', 'xl' |
| outerSpace, innerSpace                                           | MantineSpacing | 'xs', 'lg'       |
| outerSpaceTop, outerSpaceBottom, outerSpaceLeft, outerSpaceRight | MantineSpacing | 'md', 'xl'       |
| innerSpaceTop, innerSpaceBottom, innerSpaceLeft, innerSpaceRight | MantineSpacing | 'md', 'xl'       |

All of these can be suffixed with a breakpoint (e.g. `gapMd`, `rowLg`).

## useAbstractProps

Maps and normalizes all Block component props, including responsive and alias props, into a single set of mapped props for rendering. Handles logic for flex, spacing, direction, and class names.

**How it works:**

- The mapped props are a subset of the input props, each resolved to a single value for the current breakpoint. For example, if you provide `widthXs={100} widthMd={200} widthLg={400}`, only one `width` value is resolved and passed to the rendered component.
- This is the mechanism used internally by MantineBlock and other Block components to ensure only the correct, active prop values are used at render time.

**Sample usage (see MantineBlock):**

```tsx
const mappedProps = useAbstractProps(props);
// mappedProps contains only the resolved values for the current breakpoint
<Component {...mappedProps}>{mappedProps.children}</Component>;
```

## MantineBlock.tsx

Renders a Block using Mantine's Flex or Box, applying all mapped and responsive props. Passes spacing, direction, alignment, and other layout props to Mantine components.

**Sample usage:**

```tsx
<Block.Section row wrap>
  <Block.Text>Item 1</Block.Text>
  <Block.Text>Item 2</Block.Text>
</Block.Section>
```

**Example: Responsive children prop:**

```tsx
<Block.Section
  children={<Block.Text>Mobile/Default Content</Block.Text>}
  childrenLg={<Block.Text>Desktop/Large Screen Content</Block.Text>}
/>
```

- The default content is shown on mobile/small screens.
- The `childrenLg` content is shown at the `lg` breakpoint and above.

**Responsive Props Table:**

| Prop                                                             | Description              |
| ---------------------------------------------------------------- | ------------------------ |
| row, column                                                      | Flex direction           |
| gap                                                              | Spacing between children |
| wrap                                                             | Flex wrap                |
| width, minWidth, maxWidth                                        | Sizing                   |
| height, minHeight, maxHeight                                     | Sizing                   |
| columns                                                          | Grid columns             |
| outerSpace, innerSpace                                           | Margin/Padding           |
| outerSpaceTop, outerSpaceBottom, outerSpaceLeft, outerSpaceRight | Margin (directional)     |
| innerSpaceTop, innerSpaceBottom, innerSpaceLeft, innerSpaceRight | Padding (directional)    |
| size                                                             | Size alias               |
| border, borderTop, borderBottom, borderLeft, borderRight         | Border toggles           |
| background, backgroundInverse, backgroundSecondary               | Background variants      |
| sticky                                                           | Sticky positioning       |
| frost                                                            | Frosted glass effect     |

See [`BlockInputProps`](./src/components/Block/Block.types.ts) for the full list of available props.

## Size Prop and Inheritance

When a `size` prop is set on a Block, it creates a context provider that automatically passes the size value to all child Block components. This means children will inherit sizing-related properties (such as font size and spacing) unless they explicitly set their own `size` prop, which will override the inherited value for that component and its subtree.

## Roadmap: Configurable Breakpoints & Prop Registration

A future iteration will support configurable breakpoints and prop registration, allowing you to define your own breakpoints and extend the set of responsive props.

The goal is not to reinvent a DLS, but to augment it with solutions for common inline layout issues, reducing the need for custom hooks, listeners, and most responsive stylesheets. The prop system is powerful enough to handle responsive scenarios for width, height, size, gaps, columns, and more, all declaratively.

Further exploration is underway to create a generalized abstraction layer above a DLS that describes what to render, not how to render it. This is a work in progress—balancing how far to take the abstraction before handing off to a DLS for lower-level components (like tabs, accordions, etc).

Key features include responsive columns, rows, typography, cards, shadows, backgrounds, and components that adapt to various backgrounds. These leverage DLS values where appropriate by tapping into useResponsiveProps, system props, and CSS variables.
