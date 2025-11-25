import { forwardRef } from "react";
import type { BlockProps } from "./Block.types";
import { getBorderProps } from "./border";
import { getColorProps } from "./color";
import { Box, Flex, Grid } from "@mantine/core";
import { useResponsiveProp } from "./useResponsiveProp";
import { BlockProvider } from "./BlockContext";
import { useBlockSize } from "./useBlockContext";

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
    size = "md",
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
  const renderSize = useBlockSize(size);

  let Component;

  if (grid) Component = Flex;
  else if (flexDirection === "row" || flexDirection === "column")
    Component = Flex;
  else {
    Component = Box;
  }

  const content = (
    <Component
      ref={ref}
      gap={flexDirection || grid ? "md" : undefined}
      direction={flexDirection}
      align={flexDirection === "row" && middle ? "center" : undefined}
      flex={fill ? 1 : undefined}
      p={inset ? size : 0}
      w={width}
      bg={bg}
      color={color}
      style={{ ...borderStyles }}
      size={renderSize}
      {...rest}
    />
  );

  const blockContextSize = typeof size === "number" ? String(size) : size;

  if (blockContextSize) {
    return (
      <BlockProvider value={{ size: blockContextSize }}>
        {content}
      </BlockProvider>
    );
  }
  return content;
});

export default MantineBlock;
