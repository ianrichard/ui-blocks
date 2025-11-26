import { forwardRef } from "react";
import type { BlockProps } from "./Block.types";
import { getColorProps } from "./color";
import { Box, Flex } from "@mantine/core";
import { useResponsiveProp } from "./useResponsiveProp";
import { useResponsiveColsProp } from "./useResponsiveColsProp";
import styles from "./Block.module.scss";
import classNames from "classnames";

const MantineBlock = forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
  const {
    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    className,
    compact,
    cozy,
    fill,
    // grid,
    inset,
    inverse,
    maxWidth,
    middle,
    secondary,
    gap,
    gapCompact,
    gapCozy,
    ...rest
  } = props;

  const { bg, color } = getColorProps(inverse, secondary);

  const row = useResponsiveProp("row", props);
  const col = useResponsiveProp("col", props);
  const flexDirection = row ? "row" : col ? "column" : undefined;
  const width = useResponsiveProp("width", props);
  const cols = useResponsiveColsProp(props);

  let Component;

  // if (grid) Component = Flex;
  // else

  if (flexDirection === "row" || flexDirection === "column") Component = Flex;
  else {
    Component = Box;
  }

  return (
    <Component
      align={flexDirection === "row" && middle ? "center" : undefined}
      bg={bg}
      color={color}
      direction={flexDirection}
      flex={fill ? 1 : undefined}
      maw={maxWidth}
      ref={ref}
      w={width}
      className={classNames(styles.blockBase, className, {
        [styles.compact]: compact,
        [styles.cozy]: !compact && cozy,
        [styles.inset]: inset,
        [styles.border]: border,
        [styles.borderLeft]: borderLeft,
        [styles.borderRight]: borderRight,
        [styles.borderTop]: borderTop,
        [styles.borderBottom]: borderBottom,
        [styles.block]: !flexDirection,
        [styles.flex]: !!flexDirection,
        [styles.gapCompact]: gapCompact,
        [styles.gap]: gap,
        [styles.gapCozy]: gapCozy,
        // [styles.grid]: grid,
        [styles[`cols-${cols}`]]: cols,
      })}
      {...rest}
    />
  );
});

export default MantineBlock;
