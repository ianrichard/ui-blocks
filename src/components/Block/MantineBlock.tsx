import { forwardRef } from "react";
import type { BlockProps } from "./Block.types";
import { Box, Flex } from "@mantine/core";
import { useAbstractToMantineProps } from "./useAbstractToMantineProps";
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
    middle,
    verticalSpace = false,
    ...other
  } = props;

  const mappedProps = useAbstractToMantineProps(other);
  const flexDirection = mappedProps.flexDirection;

  let Component;

  if (flexDirection === "row" || flexDirection === "column") Component = Flex;
  else {
    Component = Box;
  }

  return (
    <Component
      align={flexDirection === "row" && middle ? "center" : undefined}
      bg={mappedProps.backgroundColor}
      c={mappedProps.textColor}
      direction={flexDirection}
      flex={fill ? 1 : undefined}
      ref={ref}
      w={mappedProps.width}
      miw={mappedProps.minWidth}
      maw={mappedProps.maxWidth}
      h={mappedProps.height}
      mih={mappedProps.minHeight}
      mah={mappedProps.maxHeight}
      p={mappedProps.innerSpace}
      pt={mappedProps.innerSpaceTop}
      pb={mappedProps.innerSpaceBottom}
      pl={mappedProps.innerSpaceLeft}
      pr={mappedProps.innerSpaceRight}
      m={mappedProps.outerSpace}
      mt={mappedProps.outerSpaceTop}
      mb={mappedProps.outerSpaceBottom}
      ml={mappedProps.outerSpaceLeft}
      mr={mappedProps.outerSpaceRight}
      gap={mappedProps.gap}
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
      {...mappedProps.otherProps}
    />
  );
});

export default MantineBlock;
