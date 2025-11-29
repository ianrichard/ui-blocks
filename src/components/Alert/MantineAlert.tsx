import { forwardRef } from "react";
import { Alert } from "@mantine/core";
import type { ReactNode } from "react";
import type { MantineColor } from "@mantine/core";

export interface AlertProps {
    title?: ReactNode;
    children: ReactNode;
    color?: MantineColor;
    icon?: ReactNode;
    variant?: "filled" | "light" | "outline" | "default" | "transparent";
    withCloseButton?: boolean;
    onClose?: () => void;
    className?: string;
}

const MantineAlert = forwardRef<HTMLDivElement, AlertProps>(
    (
        {
            title,
            children,
            color,
            icon,
            variant = "light",
            withCloseButton,
            onClose,
            className,
            ...others
        },
        ref
    ) => {
        return (
            <Alert
                ref={ref}
                title={title}
                color={color}
                icon={icon}
                variant={variant}
                withCloseButton={withCloseButton}
                onClose={onClose}
                className={className}
                {...others}
            >
                {children}
            </Alert>
        );
    }
);

MantineAlert.displayName = "Block.Alert";

export default MantineAlert;
