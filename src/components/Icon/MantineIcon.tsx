import { forwardRef } from "react";
import { ActionIcon } from "@mantine/core";
import * as TablerIcons from "@tabler/icons-react";
import { withBlockSize } from "../Block/withBlockSize";
import styles from "./Icon.module.scss";
import type { SizeInputProps } from "../Block/Block.types";

export interface IconProps extends SizeInputProps {
  name?: keyof typeof TablerIcons;
  onClick?: () => void;
  href?: string;
}

const MantineIconBase = forwardRef<
  HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement,
  IconProps
>(({ name = "IconPhoto", onClick, href, size = "md", ...other }, ref) => {
  const sizeMap: Record<string, number> = {
    xs: 32,
    sm: 32,
    md: 32,
    lg: 48,
    xl: 48,
  };

  const IconComponent = (TablerIcons[name] ||
    TablerIcons.IconCircle) as React.ComponentType<{ size: number }>;

  const sizeValue = sizeMap[size];

  if (onClick || href) {
    return (
      <ActionIcon
        variant="transparent"
        onClick={onClick}
        component={href ? "a" : undefined}
        href={href}
        size={sizeValue}
        ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        className={styles.icon}
        {...other}
      >
        <IconComponent size={sizeValue} />
      </ActionIcon>
    );
  }

  return (
    <span
      className={styles.icon}
      ref={ref as React.ForwardedRef<HTMLSpanElement>}
    >
      <IconComponent size={sizeValue} {...other} />
    </span>
  );
});

MantineIconBase.displayName = "Block.IconBase";

const MantineIcon = withBlockSize(MantineIconBase);

MantineIcon.displayName = "Block.Icon";

export default MantineIcon;
