import React from 'react';
import { Stack as MantineStack, Grid, Container as MantineContainer } from '@mantine/core';

export interface StackProps {
    children: React.ReactNode;
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    relaxed?: boolean;
    compact?: boolean;
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    mt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface ColumnsProps {
    children: React.ReactNode;
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
}

export interface ColumnProps {
    children: React.ReactNode;
    span?: number;
}

export interface ContainerProps {
    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
    fluid?: boolean;
}

export const Stack = ({ children, gap = 'md', relaxed, compact, align, justify, mt }: StackProps) => {
    let finalGap = gap;
    if (relaxed) finalGap = 'xl';
    if (compact) finalGap = 'xs';

    return (
        <MantineStack gap={finalGap} align={align} justify={justify} mt={mt}>
            {children}
        </MantineStack>
    );
};

export const Columns = ({ children, gap = 'md', align, justify }: ColumnsProps) => {
    return (
        <Grid gutter={gap} align={align} justify={justify}>
            {children}
        </Grid>
    );
};

export const Column = ({ children, span = 12 }: ColumnProps) => {
    return (
        <Grid.Col span={span}>
            {children}
        </Grid.Col>
    );
};

export const Container = ({ children, size = 'lg', fluid }: ContainerProps) => {
    return (
        <MantineContainer size={size} fluid={fluid}>
            {children}
        </MantineContainer>
    );
};
