import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import { Button as MantineButtonComponent } from '@mantine/core';

export interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    secondary?: boolean;
    tertiary?: boolean;
    destructive?: boolean;
    hollow?: boolean;
    disabled?: boolean;
}

const MantineButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, onClick, href, secondary, tertiary, destructive, hollow, disabled }, ref) => {
        let variant: 'filled' | 'light' | 'outline' | 'subtle' = 'filled';
        let color = 'blue';

        if (secondary) {
            variant = 'light';
        } else if (tertiary) {
            variant = 'subtle';
        } else if (hollow) {
            variant = 'outline';
        }

        if (destructive) {
            color = 'red';
        }

        if (href) {
            return (
                <MantineButtonComponent
                    component="a"
                    href={href}
                    variant={variant}
                    color={color}
                    disabled={disabled}
                >
                    {children}
                </MantineButtonComponent>
            );
        }

        return (
            <MantineButtonComponent
                ref={ref}
                onClick={onClick}
                variant={variant}
                color={color}
                disabled={disabled}
            >
                {children}
            </MantineButtonComponent>
        );
    }
);

MantineButton.displayName = 'Block.Button';

export default MantineButton;
