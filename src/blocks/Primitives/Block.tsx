import React from 'react';
import { Box } from '@mantine/core';
import type { MantineSpacing, MantineColor, MantineRadius, MantineShadow } from '@mantine/core';

export interface BlockProps {
    children?: React.ReactNode;

    // Margin props
    m?: MantineSpacing;
    mx?: MantineSpacing;
    my?: MantineSpacing;
    mt?: MantineSpacing;
    mr?: MantineSpacing;
    mb?: MantineSpacing;
    ml?: MantineSpacing;

    // Padding props
    p?: MantineSpacing;
    px?: MantineSpacing;
    py?: MantineSpacing;
    pt?: MantineSpacing;
    pr?: MantineSpacing;
    pb?: MantineSpacing;
    pl?: MantineSpacing;

    // Layout props
    flex?: string | number;

    // Responsive span props (for grid usage)
    span?: number | 'auto';
    spanXs?: number | 'auto';
    spanSm?: number | 'auto';
    spanMd?: number | 'auto';
    spanLg?: number | 'auto';
    spanXl?: number | 'auto';

    // Display props
    bg?: MantineColor;
    radius?: MantineRadius;
    shadow?: MantineShadow;

    // Additional props
    className?: string;
    style?: React.CSSProperties;
}

export const Block = ({
    children,
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl,
    flex,
    bg,
    radius,
    shadow,
    className,
    style,
    ...rest
}: BlockProps) => {
    return (
        <Box
            m={m}
            mx={mx}
            my={my}
            mt={mt}
            mr={mr}
            mb={mb}
            ml={ml}
            p={p}
            px={px}
            py={py}
            pt={pt}
            pr={pr}
            pb={pb}
            pl={pl}
            bg={bg}
            className={className}
            style={{
                flex,
                ...style,
            }}
            {...rest}
        >
            {children}
        </Box>
    );
};
