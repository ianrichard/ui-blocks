import { forwardRef } from "react";
import { ActionIcon } from "@mantine/core";
import * as TablerIcons from "@tabler/icons-react";
import { withBlockSize } from "../Block/withBlockSize";
import styles from "./Icon.module.scss";
import type { SizeInputProps } from "../Block/Block.types";

export interface IconProps extends SizeInputProps {
  name?: string;
  onClick?: () => void;
  href?: string;
  // size: SizeInputProp;
}

const sizeMapIcon: Record<string, number> = {
  xs: 32,
  sm: 32,
  md: 32,
  lg: 48,
  xl: 48,
};

const sizeMapUtility: Record<string, number> = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

const MantineIconBase = (
  sizeMap: Record<string, number>,
  extraClass?: string
) =>
  forwardRef<
    HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement,
    IconProps
  >(({ name = "IconPhoto", onClick, href, size = "md", ...other }, ref) => {
    const IconComponent = (TablerIcons[name] ||
      TablerIcons.IconCircle) as React.ComponentType<{ size: number }>;
    const sizeValue = sizeMap[size];
    const className = [styles.icon, extraClass].filter(Boolean).join(" ");

    if (onClick || href) {
      return (
        <ActionIcon
          variant="transparent"
          // onClick={onClick}
          component={href ? "a" : undefined}
          // href={href}
          size={sizeValue}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={className}
          {...other}
        >
          <IconComponent size={sizeValue} />
        </ActionIcon>
      );
    }

    return (
      <span
        className={className}
        ref={ref as React.ForwardedRef<HTMLSpanElement>}
      >
        <IconComponent size={sizeValue} {...other} />
      </span>
    );
  });

const MantineIcon = withBlockSize(
  MantineIconBase(sizeMapIcon, styles.withMargin)
);
MantineIcon.displayName = "Block.Icon";

const MantineUtilityIcon = withBlockSize(MantineIconBase(sizeMapUtility));
MantineUtilityIcon.displayName = "Block.UtilityIcon";

export { MantineIcon, MantineUtilityIcon };
