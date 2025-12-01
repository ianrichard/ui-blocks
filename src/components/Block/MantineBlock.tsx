import { forwardRef } from "react";
import type { ElementType } from "react";
import { Box, Flex } from "@mantine/core";
import type { BlockInputProps, BlockContextValue } from "./Block.types";
import { useAbstractProps } from "./useAbstractProps";
import { BlockProvider } from "./BlockContext";
import { useBlockContext } from "./useBlockContext";

const MantineBlock = forwardRef<HTMLDivElement, BlockInputProps>(
  (props, ref) => {
    const mappedProps = useAbstractProps(props);
    let Component: ElementType;
    if (
      props.component &&
      (typeof props.component === "function" ||
        typeof props.component === "string")
    ) {
      Component = props.component as ElementType;
    } else if (mappedProps.display === "flex") {
      Component = Flex;
    } else {
      Component = Box;
    }

    console.log(mappedProps);

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
    if (mappedProps.backgroundVariant)
      providerValue.backgroundVariant = mappedProps.backgroundVariant;

    if (Object.keys(mappedProps).length > 0) {
      return <BlockProvider value={providerValue}>{content}</BlockProvider>;
    }
    return content;
  }
);

export default MantineBlock;
