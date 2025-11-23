import React from 'react';
import { Flex, Grid as MantineGrid, Container as MantineContainer } from '@mantine/core';
import type { MantineSpacing } from '@mantine/core';
import type { BlockProps } from '../Primitives/Block';

export interface RowProps extends BlockProps {
    gap?: MantineSpacing;
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export interface ColumnProps extends BlockProps {
    gap?: MantineSpacing;
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
}

export interface GridProps extends BlockProps {
    gap?: MantineSpacing;
    gutter?: MantineSpacing;
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    columns?: number;
}

export interface GridItemProps extends BlockProps {
    span?: number | 'auto';
    spanXs?: number | 'auto';
    spanSm?: number | 'auto';
    spanMd?: number | 'auto';
    spanLg?: number | 'auto';
    spanXl?: number | 'auto';
}

export interface ContainerProps {
    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
    fluid?: boolean;
}

export const Row = ({
    children,
    gap = 'md',
    align,
    justify,
    wrap = 'wrap',
    m, mx, my, mt, mr, mb, ml,
    p, px, py, pt, pr, pb, pl,
    flex,
    bg,
    radius,
    shadow,
    className,
    style,
    ...rest
}: RowProps) => {
    return (
        <Flex
            direction="row"
            gap={gap}
            align={align}
            justify={justify}
            wrap={wrap}
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
        </Flex>
    );
};

export const Column = ({
    children,
    gap = 'md',
    align,
    justify,
    m, mx, my, mt, mr, mb, ml,
    p, px, py, pt, pr, pb, pl,
    flex,
    bg,
    radius,
    shadow,
    className,
    style,
    ...rest
}: ColumnProps) => {
    return (
        <Flex
            direction="column"
            gap={gap}
            align={align}
            justify={justify}
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
        </Flex>
    );
};

export const Grid = ({
    children,
    gap,
    gutter = 'md',
    align,
    justify,
    columns = 12,
    m, mx, my, mt, mr, mb, ml,
    p, px, py, pt, pr, pb, pl,
    flex,
    bg,
    radius,
    shadow,
    className,
    style,
    ...rest
}: GridProps) => {
    return (
        <MantineGrid
            gutter={gap || gutter}
            align={align}
            justify={justify}
            columns={columns}
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
        </MantineGrid>
    );
};

export const GridItem = ({
    children,
    span = 12,
    spanXs,
    spanSm,
    spanMd,
    spanLg,
    spanXl,
    m, mx, my, mt, mr, mb, ml,
    p, px, py, pt, pr, pb, pl,
    flex,
    bg,
    radius,
    shadow,
    className,
    style,
    ...rest
}: GridItemProps) => {
    return (
        <MantineGrid.Col
            span={span}
            {...(spanXs && { span: { xs: spanXs } })}
            {...(spanSm && { span: { sm: spanSm } })}
            {...(spanMd && { span: { md: spanMd } })}
            {...(spanLg && { span: { lg: spanLg } })}
            {...(spanXl && { span: { xl: spanXl } })}
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
        </MantineGrid.Col>
    );
};

export const Container = ({ children, size = 'lg', fluid }: ContainerProps) => {
    return (
        <MantineContainer size={size} fluid={fluid}>
            {children}
        </MantineContainer>
    );
};
