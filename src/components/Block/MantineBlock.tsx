import { forwardRef } from 'react';
import type { CSSProperties, ReactNode, ElementType } from 'react';
import { Box } from '@mantine/core';
import type { MantineSpacing } from '@mantine/core';

// Spacing type (matches Mantine spacing)
type Spacing = MantineSpacing | number;

export interface BlockProps {
    children?: ReactNode;
    className?: string;

    // Component to render as (defaults to Box)
    component?: ElementType;

    // Spacing props
    p?: Spacing;
    px?: Spacing;
    py?: Spacing;
    pt?: Spacing;
    pb?: Spacing;
    pl?: Spacing;
    pr?: Spacing;

    m?: Spacing;
    mx?: Spacing;
    my?: Spacing;
    mt?: Spacing;
    mb?: Spacing;
    ml?: Spacing;
    mr?: Spacing;

    // Size props
    width?: string | number;
    height?: string | number;
    minWidth?: string | number;
    minHeight?: string | number;

    // Background props
    inverse?: boolean;
    secondary?: boolean;

    // Border props
    border?: boolean;
    borderLeft?: boolean;
    borderRight?: boolean;
    borderTop?: boolean;
    borderBottom?: boolean;

    // Layout mode props (mutually exclusive)
    row?: boolean;
    column?: boolean;
    grid?: boolean;

    // Grid configuration
    cols?: number;

    // Alignment props
    left?: boolean;
    right?: boolean;
    center?: boolean;
    justify?: boolean;
    top?: boolean;
    middle?: boolean;
    bottom?: boolean;

    // Gap props
    gap?: Spacing;

    // Inset props (padding)
    inset?: Spacing;

    // Item layout props
    fill?: boolean;
    col?: number | string;

    // Common props
    onClick?: () => void;
    style?: CSSProperties;

    // Allow any additional props to pass through to the component
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

const MantineBlock = forwardRef<HTMLDivElement, BlockProps>(
    (
        {
            children,
            className,
            component,

            // Spacing
            p, px, py, pt, pb, pl, pr,
            m, mx, my, mt, mb, ml, mr,

            // Size
            width, height, minWidth, minHeight,

            // Background
            inverse,
            secondary,

            // Border
            border,
            borderLeft,
            borderRight,
            borderTop,
            borderBottom,

            // Layout
            row,
            column,
            grid,
            cols,

            // Alignment
            left,
            right,
            center,
            justify,
            top,
            middle,
            bottom,

            // Gap
            gap = row || column ? 'md' : undefined,

            // Inset
            inset,

            // Item layout
            fill,
            col,

            // Common
            onClick,
            style,

            // Capture any additional props to pass through
            ...rest
        },
        ref
    ) => {
        // Determine which component to render
        const Component = component || Box;
        // Build inline styles
        const inlineStyles: CSSProperties = {
            ...style,
        };

        // Layout mode
        if (row) {
            inlineStyles.display = 'flex';
            inlineStyles.flexDirection = 'row';
        } else if (column) {
            inlineStyles.display = 'flex';
            inlineStyles.flexDirection = 'column';
        } else if (grid) {
            inlineStyles.display = 'grid';
            if (cols) inlineStyles.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        }

        // Alignment
        if (row || column) {
            // Horizontal alignment
            if (left) inlineStyles.justifyContent = 'flex-start';
            if (right) inlineStyles.justifyContent = 'flex-end';
            if (center) inlineStyles.justifyContent = 'center';
            if (justify) inlineStyles.justifyContent = 'space-between';

            // Vertical alignment
            if (top) inlineStyles.alignItems = 'flex-start';
            if (middle) inlineStyles.alignItems = 'center';
            if (bottom) inlineStyles.alignItems = 'flex-end';
        }

        // Size
        if (width) inlineStyles.width = width;
        if (height) inlineStyles.height = height;
        if (minWidth) inlineStyles.minWidth = minWidth;
        if (minHeight) inlineStyles.minHeight = minHeight;

        // Background
        if (inverse) {
            inlineStyles.backgroundColor = 'var(--mantine-color-blue-filled)';
            inlineStyles.color = 'var(--mantine-color-white)';
        } else if (secondary) {
            inlineStyles.backgroundColor = 'var(--mantine-color-gray-1)';
        }

        // Borders
        if (border) inlineStyles.border = '1px solid var(--mantine-color-gray-3)';
        if (borderLeft) inlineStyles.borderLeft = '1px solid var(--mantine-color-gray-3)';
        if (borderRight) inlineStyles.borderRight = '1px solid var(--mantine-color-gray-3)';
        if (borderTop) inlineStyles.borderTop = '1px solid var(--mantine-color-gray-3)';
        if (borderBottom) inlineStyles.borderBottom = '1px solid var(--mantine-color-gray-3)';

        // Item layout
        if (fill) inlineStyles.flex = 1;
        if (col) inlineStyles.width = typeof col === 'number' ? `${col}%` : col;

        // Note: We spread 'rest' to pass through component-specific props (like shadow, withBorder, etc.)
        // but we don't include alignment boolean props (left, right, top, bottom, center, justify, middle)
        // in rest because they're explicitly destructured above and used for flex alignment logic.
        return (
            <Component
                ref={ref}
                className={className}
                p={inset || p}
                px={px}
                py={py}
                pt={pt}
                pb={pb}
                pl={pl}
                pr={pr}
                m={m}
                mx={mx}
                my={my}
                mt={mt}
                mb={mb}
                ml={ml}
                mr={mr}
                style={{
                    ...inlineStyles,
                    gap: gap ? `var(--mantine-spacing-${gap})` : undefined,
                }}
                onClick={onClick}
                {...rest}
            >
                {children}
            </Component>
        );
    }
);

MantineBlock.displayName = 'Block';

export default MantineBlock;
