import { forwardRef } from "react";
import type { BlockProps } from "./Block.types";
import { getBorderProps } from "./border";
import { getColorProps } from "./color";
import { Box, Flex } from "@mantine/core";
import { useResponsiveProp } from "./useResponsiveProp";
import styles from "./Block.module.scss";
import classNames from "classnames";

const MantineBlock = forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
  const {
    inverse,
    secondary,
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    middle,
    fill,
    grid,
    size,
    inset,
    className,
    ...rest
  } = props;

  const { bg, color } = getColorProps(inverse, secondary);
  const { borderStyles } = getBorderProps(
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft
  );

  const row = useResponsiveProp("row", props);
  const col = useResponsiveProp("col", props);
  const flexDirection = row ? "row" : col ? "column" : undefined;
  const width = useResponsiveProp("width", props);

  let Component;

  if (grid) Component = Flex;
  else if (flexDirection === "row" || flexDirection === "column")
    Component = Flex;
  else {
    Component = Box;
  }

  return (
    <Component
      ref={ref}
      direction={flexDirection}
      align={flexDirection === "row" && middle ? "center" : undefined}
      flex={fill ? 1 : undefined}
      w={width}
      bg={bg}
      color={color}
      style={{ ...borderStyles }}
      className={classNames(styles.blockBase, className, {
        [styles[`size-${size}`]]: size,
        [styles.inset]: inset,
      })}
      {...rest}
    />
  );
});

export default MantineBlock;
