import React, { forwardRef } from "react";
import type { ReactNode } from "react";
import { Button } from "@mantine/core";
import { useBlockSize } from "../Block/useBlockContext";
import { getMantineButtonSize } from "../sizeMap";

export interface ButtonProps {
  children: ReactNode;
  href?: string;
  secondary?: boolean;
  tertiary?: boolean;
  destructive?: boolean;
  hollow?: boolean;
  disabled?: boolean;
  size?: string | number;
}

const MantineButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  let variant: "filled" | "light" | "outline" | "subtle" = "filled";
  let color = "blue";

  const {
    secondary,
    tertiary,
    destructive,
    hollow,
    disabled,
    children,
    href,
    size,
    ...other
  } = props;

  const blockSize = useBlockSize(size);
  const buttonSize = getMantineButtonSize(blockSize, -1);

  if (secondary) {
    variant = "light";
  } else if (tertiary) {
    variant = "subtle";
  } else if (hollow) {
    variant = "outline";
  }

  if (destructive) {
    color = "red";
  }

  const commonProps = {
    variant,
    color,
    disabled,
    size: buttonSize,
    ...other,
  };

  if (href) {
    return (
      <Button component="a" href={href} {...commonProps}>
        {children}
      </Button>
    );
  }
  return (
    <Button ref={ref as React.ForwardedRef<HTMLButtonElement>} {...commonProps}>
      {children}
    </Button>
  );
});

MantineButton.displayName = "Block.Button";

export default MantineButton;
