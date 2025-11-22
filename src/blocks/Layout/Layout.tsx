import React from 'react';
import { Stack as MantineStack, Grid } from '@mantine/core';

export interface StackProps {
    children: React.ReactNode;
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    relaxed?: boolean;
    compact?: boolean;
}

export interface ColumnsProps {
    children: React.ReactNode;
    gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface ColumnProps {
    children: React.ReactNode;
    span?: number;
}

export const Stack = ({ children, gap = 'md', relaxed, compact }: StackProps) => {
    let finalGap = gap;
    if (relaxed) finalGap = 'xl';
    if (compact) finalGap = 'xs';

    return (
        <MantineStack gap={finalGap}>
            {children}
        </MantineStack>
    );
};

export const Columns = ({ children, gap = 'md' }: ColumnsProps) => {
    return (
        <Grid gutter={gap}>
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
