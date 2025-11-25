import { Title } from "@mantine/core";
import type { TitleProps } from "@mantine/core";
import { forwardRef } from "react";
import type { ReactNode } from "react";
import { getMantineSpacing, getMantineTitleOrder } from "../sizeMap";
import { useBlockSize } from "../Block/useBlockContext";
import MantineBlock from "../Block/MantineBlock";

interface MantineTitleProps extends TitleProps {
  children?: ReactNode;
}

const MantineTitle = forwardRef<HTMLHeadingElement, MantineTitleProps>(
  (props, ref) => {
    const { children, size, ...rest } = props;
    const blockSize = useBlockSize(size);
    const order = getMantineTitleOrder(blockSize);
    const margin = getMantineSpacing(blockSize, -1);
    return (
      <MantineBlock
        component={Title}
        ref={ref}
        order={order}
        my={margin}
        {...rest}
      >
        {children}
      </MantineBlock>
    );
  }
);

export default MantineTitle;
