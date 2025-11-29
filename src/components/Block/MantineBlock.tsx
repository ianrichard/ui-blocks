import { forwardRef } from "react";
import type { BlockInputProps, BlockContextValue } from "./Block.types";
import { useAbstractToMantineProps } from "./useAbstractToMantineProps";
import { BlockProvider } from "./BlockContext";
import { useBlockContext } from "./useBlockContext";

const MantineBlock = forwardRef<HTMLDivElement, BlockInputProps>(
  (props, ref) => {
    const mappedProps = useAbstractToMantineProps(props);
    const Component = mappedProps.component;

    const content = (
      <Component
        align={mappedProps.flexAlign}
        className={mappedProps.className}
        direction={mappedProps.flexDirection}
        flex={mappedProps.flex}
        gap={mappedProps.gap}
        miw={mappedProps.minWidth}
        w={mappedProps.width}
        maw={mappedProps.maxWidth}
        h={mappedProps.height}
        mah={mappedProps.maxHeight}
        mih={mappedProps.minHeight}
        m={mappedProps.outerSpace}
        mt={mappedProps.outerSpaceTop}
        mb={mappedProps.outerSpaceBottom}
        ml={mappedProps.outerSpaceLeft}
        mr={mappedProps.outerSpaceRight}
        my={mappedProps.outerSpaceTopBottom}
        mx={mappedProps.outerSpaceLeftRight}
        p={mappedProps.innerSpace}
        pt={mappedProps.innerSpaceTop}
        pb={mappedProps.innerSpaceBottom}
        pl={mappedProps.innerSpaceLeft}
        pr={mappedProps.innerSpaceRight}
        py={mappedProps.innerSpaceTopBottom}
        px={mappedProps.innerSpaceLeftRight}
        ref={ref}
        {...mappedProps.otherProps}
      >
        {mappedProps.children}
      </Component>
    );

    const parentContext = useBlockContext();
    const providerValue: BlockContextValue = { ...parentContext };

    if (mappedProps.size) providerValue.size = mappedProps.size;
    if (mappedProps.scale) providerValue.scale = mappedProps.scale;
    if (mappedProps.backgroundVariant)
      providerValue.backgroundVariant = mappedProps.backgroundVariant;

    if (Object.keys(mappedProps).length > 0) {
      return <BlockProvider value={providerValue}>{content}</BlockProvider>;
    }
    return content;
  }
);

export default MantineBlock;
