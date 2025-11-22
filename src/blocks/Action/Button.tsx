import React from 'react';
import { Button as MantineButton } from '@mantine/core';

export interface ButtonProps {
    children: React.ReactNode;
    primary?: boolean;
    secondary?: boolean;
    danger?: boolean;
    ghost?: boolean;
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    onClick?: () => void;
}

export const Button = ({
    children,
    primary,
    secondary,
    danger,
    ghost,
    block,
    ...props
}: ButtonProps) => {
    let variant = 'default';
    let color = undefined;

    if (primary) {
        variant = 'filled';
        color = 'blue';
    } else if (secondary) {
        variant = 'light';
        color = 'blue';
    } else if (danger) {
        variant = 'filled';
        color = 'red';
    } else if (ghost) {
        variant = 'subtle';
        color = 'gray';
    }

    return (
        <MantineButton
            variant={variant}
            color={color}
            fullWidth={block}
            {...props}
        >
            {children}
        </MantineButton>
    );
};
