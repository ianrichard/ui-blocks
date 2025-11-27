import { forwardRef } from "react";
import type { BlockInputProps } from "./Block.types";
import { useAbstractToMantineProps } from "./useAbstractToMantineProps";

const MantineBlock = forwardRef<HTMLDivElement, BlockInputProps>(
  (props, ref) => {
    const mappedProps = useAbstractToMantineProps(props);
    const Component = mappedProps.component;

    return (
      <Component
        align={mappedProps.flexAlign}
        bg={mappedProps.backgroundColor}
        c={mappedProps.textColor}
        className={mappedProps.className}
        direction={mappedProps.flexDirection}
        flex={mappedProps.flex}
        gap={mappedProps.gap}
        h={mappedProps.height}
        m={mappedProps.outerSpace}
        mah={mappedProps.maxHeight}
        maw={mappedProps.maxWidth}
        mb={mappedProps.outerSpaceBottom}
        mih={mappedProps.minHeight}
        miw={mappedProps.minWidth}
        ml={mappedProps.outerSpaceLeft}
        mr={mappedProps.outerSpaceRight}
        mt={mappedProps.outerSpaceTop}
        my={mappedProps.outerSpaceTopBottom}
        p={mappedProps.innerSpace}
        pb={mappedProps.innerSpaceBottom}
        pl={mappedProps.innerSpaceLeft}
        pr={mappedProps.innerSpaceRight}
        pt={mappedProps.innerSpaceTop}
        ref={ref}
        w={mappedProps.width}
        {...mappedProps.otherProps}
      />
    );
  }
);

export default MantineBlock;
