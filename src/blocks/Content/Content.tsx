import React from 'react';
import { Title, Text as MantineText, Badge as MantineBadge } from '@mantine/core';

export interface HeadingProps {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface TextProps {
    children: React.ReactNode;
    dim?: boolean;
    bold?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    mt?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    lineClamp?: number;
}

export interface BadgeProps {
    children: React.ReactNode;
    color?: string;
    variant?: 'filled' | 'light' | 'outline' | 'dot' | 'transparent';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Headline = ({ children, level = 1 }: HeadingProps) => {
    return (
        <Title order={level} mb="xs">
            {children}
        </Title>
    );
};

export const Subheadline = ({ children }: { children: React.ReactNode }) => {
    return (
        <MantineText size="lg" c="dimmed" mb="md" lh={1.4}>
            {children}
        </MantineText>
    );
};

export const Text = ({ children, dim, bold, size = 'md', mt, lineClamp }: TextProps) => {
    return (
        <MantineText
            c={dim ? 'dimmed' : undefined}
            fw={bold ? 700 : 400}
            size={size}
            mt={mt}
            lineClamp={lineClamp}
        >
            {children}
        </MantineText>
    );
};

export const Badge = ({ children, color = 'blue', variant = 'light', size = 'sm' }: BadgeProps) => {
    return (
        <MantineBadge color={color} variant={variant} size={size}>
            {children}
        </MantineBadge>
    );
};
