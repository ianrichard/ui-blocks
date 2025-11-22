import React from 'react';
import { Button as MantineButton, Menu as MantineMenu, ActionIcon } from '@mantine/core';
import { MoreHorizontal } from 'lucide-react';

// --- Button ---
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
    icon?: React.ElementType;
}

export const Button = ({
    children,
    primary,
    secondary,
    danger,
    ghost,
    block,
    disabled,
    loading,
    size = 'sm',
    onClick,
    icon: Icon
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
            disabled={disabled}
            loading={loading}
            size={size}
            onClick={onClick}
            leftSection={Icon && <Icon size="1rem" />}
        >
            {children}
        </MantineButton>
    );
};

// --- IconButton ---
export interface IconButtonProps {
    icon: React.ElementType;
    label: string;
    onClick?: () => void;
    variant?: 'transparent' | 'subtle' | 'light' | 'filled';
    color?: string;
}

export const IconButton = ({ icon: Icon, label, onClick, variant = 'subtle', color = 'gray' }: IconButtonProps) => {
    return (
        <ActionIcon variant={variant} color={color} onClick={onClick} aria-label={label}>
            <Icon size="1.125rem" />
        </ActionIcon>
    );
};

// --- Menu ---
export interface MenuProps {
    children: React.ReactNode;
}

export interface MenuItemProps {
    children: React.ReactNode;
    icon?: React.ElementType;
    onClick?: () => void;
    danger?: boolean;
}

const MenuRoot = ({ children }: MenuProps) => {
    return (
        <MantineMenu shadow="md" width={200}>
            <MantineMenu.Target>
                <ActionIcon variant="subtle" color="gray">
                    <MoreHorizontal size="1rem" />
                </ActionIcon>
            </MantineMenu.Target>

            <MantineMenu.Dropdown>
                {children}
            </MantineMenu.Dropdown>
        </MantineMenu>
    );
};

const MenuItem = ({ children, icon: Icon, onClick, danger }: MenuItemProps) => {
    return (
        <MantineMenu.Item
            leftSection={Icon && <Icon size="0.9rem" />}
            onClick={onClick}
            color={danger ? 'red' : undefined}
        >
            {children}
        </MantineMenu.Item>
    );
};

export const Menu = Object.assign(MenuRoot, {
    Item: MenuItem,
});
