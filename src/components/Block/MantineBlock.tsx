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
        // bg={mappedProps.backgroundColor}
        // c={mappedProps.textColor}
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
      >
        {mappedProps.children}
      </Component>
    );

    const parentContext = useBlockContext();
    const providerValue: BlockContextValue = { ...parentContext };
    if (mappedProps.textSize) providerValue.textSize = mappedProps.textSize;
    if (props.backgroundInverse) providerValue.backgroundVariant = "inverse";
    else if (props.backgroundSecondary)
      providerValue.backgroundVariant = "secondary";

    if (providerValue.textSize || providerValue.backgroundVariant) {
      return <BlockProvider value={providerValue}>{content}</BlockProvider>;
    }
    return content;
  }
);

export default MantineBlock;
