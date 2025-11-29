import { forwardRef } from "react";
import { Badge } from "@mantine/core";
import type { ReactNode } from "react";
import type { MantineSize, MantineColor } from "@mantine/core";

export interface BadgeProps {
    children: ReactNode;
    color?: MantineColor;
    variant?: "filled" | "light" | "outline" | "dot" | "transparent" | "default";
    size?: MantineSize;
    fullWidth?: boolean;
    circle?: boolean;
    className?: string;
}

const MantineBadge = forwardRef<HTMLDivElement, BadgeProps>(
    (
        {
            children,
            color,
            variant = "light",
            size = "md",
            fullWidth,
            circle,
            className,
            ...others
        },
        ref
    ) => {
        return (
            <Badge
                ref={ref}
                color={color}
                variant={variant}
                size={size}
                fullWidth={fullWidth}
                circle={circle}
                className={className}
                {...others}
            >
                {children}
            </Badge>
        );
    }
);

MantineBadge.displayName = "Block.Badge";

export default MantineBadge;
