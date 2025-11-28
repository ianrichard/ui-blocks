import React, { forwardRef } from "react";
import type { ReactNode } from "react";
import { Button } from "@mantine/core";
import { resolveSizeProp } from "../Size/resolveSizeProp";
import { withBlockSize } from "../Block/withBlockSize";
import type { MantineSize } from "@mantine/core";
import { useBlockContext } from "../Block/useBlockContext";
import classNames from "classnames";
import styles from "./Button.module.scss";

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
  const { backgroundVariant } = useBlockContext();
  console.log(backgroundVariant);

  let variant = "filled";
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

  const primary = !secondary && !tertiary && !destructive && !hollow;
  const buttonSize = resolveSizeProp({ size }, undefined, -1);

  if (secondary) {
    variant = "light";
  } else if (tertiary) {
    variant = "transparent";
  } else if (hollow) {
    variant = "outline";
  }

  if (backgroundVariant === "inverse") {
    color = "white";
  }

  if (destructive) {
    color = "red";
  }

  const buttonClassName = classNames(props.className, {
    [styles.backgroundInverse]: backgroundVariant === "inverse",
    [styles.primary]: primary,
    [styles.backgroundSecondary]: backgroundVariant === "secondary",
  });

  const commonProps = {
    variant,
    color,
    disabled,
    size: buttonSize,
    className: buttonClassName,
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
