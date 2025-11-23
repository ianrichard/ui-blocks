# Block UI Requirements

## Core Principles
- **No default padding or margin** unless specified otherwise
- **Mutually exclusive boolean props** where applicable
- **Responsive by design** with breakpoint-specific props
- **Mantine-based** UI framework integration
- **jQuery-like pattern** - `Block` is the base component (like `$`), all sub-components use it internally

---

## `<Block>`
The foundational component - serves as both base infrastructure AND pattern wrapper.

### Purpose
- **Base component** that all other components use internally
- **Pattern wrapper** (like jQuery's `$`) for UI patterns
- **Namespace** for sub-components: `Block.Card`, `Block.Image`, etc.
- Sub-components like `Block.Card` are just `Block` with preset props/styling

### Spacing Props
- **Responsive padding**: `p`, `px`, `py`, `pt`, `pb`, `pl`, `pr` (and `pXxs` through `pXxl` variants)
- **Responsive margin**: `m`, `mx`, `my`, `mt`, `mb`, `ml`, `mr` (and `mXxs` through `mXxl` variants)
- **Default**: `my="md"` (vertical margin)
- **No default padding**

### Size Props
- `minHeight`: number or string
- `minWidth`: number or string
- `width`, `widthXxs`, `widthXs`, `widthSm`, `widthMd`, `widthLg`, `widthXl`, `widthXxl`
- `height`, `heightXxs`, `heightXs`, `heightSm`, `heightMd`, `heightLg`, `heightXl`, `heightXxl`

### Background Props
- `inverse`: Dark blue background (light mode) with light text; light grey (dark mode) with dark text
- `secondary`: Light grey background (light mode); dark grey (dark mode) with regular text

### Common Props
- `onClick`: Passes through to root element
- Other common props pass through as needed

### Border Props
- `border`: Boolean for all borders
- `borderLeft`, `borderRight`, `borderTop`, `borderBottom`: Individual border controls

### Item Layout Props
- `fill`: Maps to `flex="1"`
- `col`, `colXxs`, `colXs`, `colSm`, `colMd`, `colLg`, `colXl`, `colXxl`: Item-level width control

### Layout Mode Props (Mutually Exclusive)
- `row`: Display flex with row direction
- `column`: Display flex with column direction  
- `grid`: Display grid

### Responsive Flex Direction
- `row`, `rowXxs`, `rowXs`, `rowSm`, `rowMd`, `rowLg`, `rowXl`, `rowXxl`: Flex row at breakpoints
- `col`, `colXxs`, `colXs`, `colSm`, `colMd`, `colLg`, `colXl`, `colXxl`: Flex column at breakpoints
- Child-level props override base props

### Grid Configuration
- `cols`, `colsXxs`, `colsXs`, `colsSm`, `colsMd`, `colsLg`, `colsXl`, `colsXxl`: Grid columns at breakpoints

### Alignment Props (Boolean)
- **Horizontal**: `left`, `right`, `center`, `justify`
- **Vertical**: `top`, `middle`, `bottom`

### Gap Props
- `gap`: Default `"md"`
- `gapXxs`, `gapXs`, `gapSm`, `gapMd`, `gapLg`, `gapXl`, `gapXxl`: Responsive gap

### Inset Props (Padding)
- `inset`: Default `"md"`
- `insetXxs`, `insetXs`, `insetSm`, `insetMd`, `insetLg`, `insetXl`, `insetXxl`: Responsive padding

---

## `<Block.Card>`
Simple card component - internally uses `<Block>` with preset styling.

### Props
- **Inherits all `<Block>` props** (row, gap, inset, etc. all work)
- **No default padding**
- `shadow`: `"none"` | `"xs"` | `"sm"` | `"md"` | `"lg"` | `"xl"` | `"xxl"`
- `border`: Boolean, default `false`
- `href`: Makes card a clickable link
- `onClick`: Makes card clickable

---

## `<Block.Image>`
Image component wrapper.

### Props
- Uses Mantine `Image` component
- `url`: Default to placeholder image
- `width`: Default `"100%"`
- `height`: Default `320`
- `cover`: Boolean, default `true` (object-fit: cover)

---

## `<Block.Title>`
Title/heading component.

### Props
- Uses Mantine `Title` component
- `size`: Default `"lg"`
- `mb`: Default `"lg"`
- `mt`: Default `"lg"` (unless first child with no top prop, then `0`)
- Size props: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` (boolean)

---

## `<Block.Subtitle>`
Subtitle component extending `<Block.Title>`.

### Props
- Extends `<Block.Title>`
- `size`: Default `"md"`
- `mb`: Default `"md"`
- Size props: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` (boolean)

---

## `<Block.Text>`
Regular text component.

### Props
- Default size: ~16px (framework default)
- Last child: `mb="0"`
- `muted`: Boolean for dimmed text
- Size props: `xxs`, `xs`, `sm`, `md`, `lg`, `xl`, `xxl` (boolean)

---

## `<Block.Button>`
Button component wrapper.

### Props
- Lightweight wrapper around Mantine `Button`
- Default: Primary design
- Style props (mutually exclusive): `secondary`, `tertiary`, `destructive`, `hollow`
- `href`: Makes button a link

---

## `<Block.Link>`
Link component wrapper.

### Props
- Lightweight wrapper around framework link/anchor
- Default: Primary design
- `underlined`: Boolean, default `true`

---

## `<Block.Avatar>`
Avatar component.

### Props
- `url`: Default to placeholder image
- `size`: Default `"md"`
- Size props: `sizeXxs`, `sizeXs`, `sizeSm`, `sizeMd`, `sizeLg`, `sizeXl`, `sizeXxl` (boolean)

---

## `<Block.Icon>`
Icon component.

### Props
- `name`: Icon name, default to placeholder
- `size`: Default `"md"`
- Size props: `sizeXxs`, `sizeXs`, `sizeSm`, `sizeMd`, `sizeLg`, `sizeXl`, `sizeXxl` (boolean)
- `href`: Makes icon a link
- `onClick`: Makes icon a button (no background)
- Button props when clickable

---

## `<Block.Video>`
Video component.

### Props
- `url`: Default to placeholder video
- `controls`: Boolean, default `true`

---

## `<Block.Tabs>`
Tabs component wrapper.

### Structure
```tsx
<Block.Tabs>
  <Block.Tab>Tab 1</Block.Tab>
  <Block.Tab>Tab 2</Block.Tab>
  <Block.TabPanel>Content 1</Block.TabPanel>
  <Block.TabPanel>Content 2</Block.TabPanel>
</Block.Tabs>
```

### Props
- Default: First tab selected
- `onSelect`: Callback on tab change
- `selectedIndex`: Controlled mode
- `defaultSelectedIndex`: Uncontrolled mode (default)
- `vertical`: Boolean for vertical tabs
- `width`: Default `"100%"`

---

## Pattern Examples

### Card with Inset Image
```tsx
<Block.Card inset>
  <Block.Image />
  <Block.Title>Title</Block.Title>
  <Block.Text>Some Text</Block.Text>
  <Block.Button>Action</Block.Button>
</Block.Card>
```

### Responsive Horizontal to Vertical Layout
```tsx
<Block.Card row>
  <Block.Image />
  <Block inset>
    <Block.Title>Title</Block.Title>
    <Block.Text>Some Text</Block.Text>
    <Block.Button>Action</Block.Button>
  </Block>
</Block.Card>
```

### Card with Actions
```tsx
<Block.Card>
  <Block inset row borderBottom>
    <Block.Title>Title</Block.Title>
    <Block.Icon onClick={() => {}} name="snowman" />
  </Block>
  <Block inset>
    <Block.Title>Title</Block.Title>
    <Block.Text>Some Text</Block.Text>
    <Block.Button>Action</Block.Button>
  </Block>
</Block.Card>
```
