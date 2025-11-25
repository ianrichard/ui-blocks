import { forwardRef } from "react";
import { Text } from "@mantine/core";
import type { TextProps } from "@mantine/core";
import type { ReactNode } from "react";
import { getMantineSpacing, getMantineTextSize } from "../sizeMap";
import { useBlockSize } from "../Block/useBlockContext";

interface MantineTextProps extends TextProps {
  children?: ReactNode;
}

const MantineText = forwardRef<HTMLParagraphElement, MantineTextProps>(
  (props, ref) => {
    const { children, size, ...other } = props;
    const blockSize = useBlockSize(size);
    const textSize = getMantineTextSize(blockSize);
    const margin = getMantineSpacing(blockSize, -1);
    return (
      <Text ref={ref} size={textSize} my={margin} {...other}>
        {children}
      </Text>
    );
  }
);

export default MantineText;
