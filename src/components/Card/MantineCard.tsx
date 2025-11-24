import { forwardRef } from "react";
import { Card } from "@mantine/core";
import type { BlockProps } from "../Block/Block.types";
import MantineBlock from "../Block/MantineBlock";

export interface CardProps extends BlockProps {
  shadow?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  border?: boolean;
  href?: string;
  radius?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  inset?: boolean;
}

const MantineCard = forwardRef<HTMLDivElement, CardProps>(
  ({ children, border = true, radius = "md", ...blockProps }, ref) => {
    return (
      <MantineBlock
        withBorder={border}
        ref={ref}
        component={Card}
        radius={radius}
        my="lg"
        {...blockProps}
      >
        {children}
      </MantineBlock>
    );
  }
);

MantineCard.displayName = "MantineCard";

export default MantineCard;
