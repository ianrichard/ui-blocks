import { forwardRef } from "react";
import type { BlockProps } from "./Block.types";
import { getColorProps } from "./color";
import { Box, Flex } from "@mantine/core";
import { useResponsiveProps } from "./useResponsiveProps";
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
    fill,
    inverse,
    middle,
    secondary,
    verticalSpace = false,
    ...other
  } = props;

  const colorProps = getColorProps(inverse, secondary);
  const responsiveProps = useResponsiveProps(other);
  const flexDirection = responsiveProps.flexDirection;

  let Component;

  if (flexDirection === "row" || flexDirection === "column") Component = Flex;
  else {
    Component = Box;
  }

  return (
    <Component
      align={flexDirection === "row" && middle ? "center" : undefined}
      bg={colorProps.bg}
      c={colorProps.color}
      direction={flexDirection}
      flex={fill ? 1 : undefined}
      ref={ref}
      w={responsiveProps.width}
      miw={responsiveProps.minWidth}
      maw={responsiveProps.maxWidth}
      h={responsiveProps.height}
      mih={responsiveProps.minHeight}
      mah={responsiveProps.maxHeight}
      p={responsiveProps.innerSpace}
      pt={responsiveProps.innerSpaceTop}
      pb={responsiveProps.innerSpaceBottom}
      pl={responsiveProps.innerSpaceLeft}
      pr={responsiveProps.innerSpaceRight}
      m={responsiveProps.outerSpace}
      mt={responsiveProps.outerSpaceTop}
      mb={responsiveProps.outerSpaceBottom}
      ml={responsiveProps.outerSpaceLeft}
      mr={responsiveProps.outerSpaceRight}
      gap={responsiveProps.gap}
      my={verticalSpace ? "xl" : undefined}
      className={classNames(styles.blockBase, className, {
        [styles.border]: border,
        [styles.borderLeft]: borderLeft,
        [styles.borderRight]: borderRight,
        [styles.borderTop]: borderTop,
        [styles.borderBottom]: borderBottom,
        [styles.block]: !flexDirection,
        [styles.flex]: flexDirection,
      })}
      {...responsiveProps.otherProps}
    />
  );
});

export default MantineBlock;
