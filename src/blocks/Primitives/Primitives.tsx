import React from 'react';
import { Badge as MantineBadge, Container as MantineContainer } from '@mantine/core';

// --- Badge ---
export interface BadgeProps {
    children: React.ReactNode;
    color?: 'blue' | 'red' | 'green' | 'yellow' | 'gray' | 'pink' | 'cyan' | 'orange' | 'grape' | 'violet' | 'indigo' | 'teal' | 'lime';
    variant?: 'filled' | 'light' | 'outline';
}

export const Badge = ({ children, color = 'blue', variant = 'light' }: BadgeProps) => {
    return (
        <MantineBadge color={color} variant={variant}>
            {children}
        </MantineBadge>
    );
};

// --- Container ---
export interface ContainerProps {
    children: React.ReactNode;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | string;
}

export const Container = ({ children, size = 'md' }: ContainerProps) => {
    return (
        <MantineContainer size={size}>
            {children}
        </MantineContainer>
    );
};
