import { forwardRef } from "react";
import type { BlockProps } from "./Block.types";
import { getColorProps } from "./color";
import { Box, Flex } from "@mantine/core";
import { useResponsiveProp } from "./useResponsiveProp";
import styles from "./Block.module.scss";
import classNames from "classnames";
import { useSizeProp } from "../Size/useSizeProp";

const MantineBlock = forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
  const {
    border,
    borderBottom,
    borderLeft,
    borderRight,
    borderTop,
    className,
    fill,
    inset,
    inverse,
    maxWidth,
    middle,
    secondary,
    gap,
    verticalSpace = false,
    ...rest
  } = props;

  const { bg, color } = getColorProps(inverse, secondary);
  const size = useSizeProp(rest);
  const row = useResponsiveProp("row", props);
  const col = useResponsiveProp("col", props);
  const flexDirection = row ? "row" : col ? "column" : undefined;
  const width = useResponsiveProp("width", props);

  let Component;

  if (flexDirection === "row" || flexDirection === "column") Component = Flex;
  else {
    Component = Box;
  }

  return (
    <Component
      align={flexDirection === "row" && middle ? "center" : undefined}
      bg={bg}
      c={color}
      direction={flexDirection}
      flex={fill ? 1 : undefined}
      maw={maxWidth}
      ref={ref}
      w={width}
      p={inset && size}
      size={size}
      gap={gap === true ? size : typeof gap === "string" ? gap : undefined}
      my={verticalSpace ? "xl" : undefined}
      className={classNames(styles.blockBase, className, {
        [styles[size || ""]]: !!size,
        [styles.inset]: inset,
        [styles.border]: border,
        [styles.borderLeft]: borderLeft,
        [styles.borderRight]: borderRight,
        [styles.borderTop]: borderTop,
        [styles.borderBottom]: borderBottom,
        [styles.block]: !flexDirection,
        [styles.flex]: flexDirection,
      })}
      {...rest}
    />
  );
});

export default MantineBlock;
