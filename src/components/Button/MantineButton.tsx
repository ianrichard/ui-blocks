import React, { forwardRef } from "react";
import type { ReactNode } from "react";
import { Button } from "@mantine/core";
import { resolveSizeProp } from "../Size/resolveSizeProp";
import { withBlockSize } from "../withBlockSize";
import type { MantineSize } from "@mantine/core";

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  secondary?: boolean;
  tertiary?: boolean;
  destructive?: boolean;
  hollow?: boolean;
  disabled?: boolean;
  size?: MantineSize;
}

const MantineButtonBase = forwardRef<
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
    size = "md",
    ...other
  } = props;

  const buttonSize = resolveSizeProp({ size }, undefined, 0);

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

MantineButtonBase.displayName = "Block.ButtonBase";

const MantineButton = withBlockSize(MantineButtonBase);

MantineButton.displayName = "Block.Button";

export default MantineButton;
