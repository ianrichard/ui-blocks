import { forwardRef } from "react";
import type { BlockProps } from "./Block.types";
import { getBorderProps } from "./border";
import { getColorProps } from "./color";
import { Box, Flex, Grid } from "@mantine/core";
import { useResponsiveProp } from "./useResponsiveProp";

const MantineBlock = forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
  const {
    inverse,
    secondary,
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    inset,
    middle,
    fill,
    grid,
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

  // Responsive flex direction
  const row = useResponsiveProp("row", props);
  const col = useResponsiveProp("col", props);
  const flexDirection = row ? "row" : col ? "column" : undefined;
  const width = useResponsiveProp("width", props);

  let Component;

  if (grid) Component = Grid;
  else if (flexDirection === "row" || flexDirection === "column")
    Component = Flex;
  else {
    Component = Box;
  }

  return (
    <Component
      ref={ref}
      gap={flexDirection || grid ? "md" : undefined}
      direction={flexDirection}
      align={flexDirection === "row" && middle ? "center" : undefined}
      flex={fill ? fill : undefined}
      p={inset ? "lg" : 0}
      w={width}
      bg={bg}
      color={color}
      style={{ ...borderStyles }}
      {...rest}
    />
  );
});

export default MantineBlock;
