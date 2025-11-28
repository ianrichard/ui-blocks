import { forwardRef } from "react";
import type { BlockInputProps } from "./Block.types";
import { useAbstractToMantineProps } from "./useAbstractToMantineProps";
import { BlockProvider } from "./BlockContext";

const MantineBlock = forwardRef<HTMLDivElement, BlockInputProps>(
  (props, ref) => {
    const mappedProps = useAbstractToMantineProps(props);
    const Component = mappedProps.component;

    const content = (
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

    if (mappedProps.size) {
      return (
        <BlockProvider value={{ size: mappedProps.size }}>
          {content}
        </BlockProvider>
      );
    }
    return content;
  }
);

export default MantineBlock;
