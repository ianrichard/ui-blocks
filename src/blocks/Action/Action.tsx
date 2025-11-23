import React from 'react';
import { Button as MantineButton, Menu as MantineMenu, ActionIcon } from '@mantine/core';
import { MoreHorizontal } from 'lucide-react';

// --- Button ---
export interface ButtonProps {
    children: React.ReactNode;
    /** Primary action style */
    primary?: boolean;
    /** Secondary action style */
    secondary?: boolean;
    /** Destructive action style */
    danger?: boolean;
    /** Ghost/Subtle action style */
    ghost?: boolean;
    /** Full width button */
    block?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Loading state */
    loading?: boolean;
    /** Button size */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Click handler */
    onClick?: () => void;
    /** Optional icon */
    icon?: React.ElementType;
}

/**
 * A versatile Button component.
 */
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
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const IconButton = ({ icon: Icon, label, onClick, variant = 'subtle', color = 'gray', size = 'md' }: IconButtonProps) => {
    return (
        <ActionIcon variant={variant} color={color} onClick={onClick} aria-label={label} size={size}>
            <Icon size="70%" />
        </ActionIcon>
    );
};

// --- Menu ---
export interface MenuProps {
    children: React.ReactNode;
    /** Custom trigger element */
    trigger?: React.ReactNode;
}

export interface MenuItemProps {
    children: React.ReactNode;
    icon?: React.ElementType;
    onClick?: () => void;
    danger?: boolean;
}

const MenuRoot = ({ children, trigger }: MenuProps) => {
    return (
        <MantineMenu shadow="md" width={200} position="bottom-end">
            <MantineMenu.Target>
                {trigger || (
                    <ActionIcon variant="subtle" color="gray">
                        <MoreHorizontal size="1rem" />
                    </ActionIcon>
                )}
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
