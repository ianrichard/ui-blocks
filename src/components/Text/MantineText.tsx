import { forwardRef } from "react";
import { Text } from "@mantine/core";
import type { TextProps } from "@mantine/core";
import type { ReactNode } from "react";

interface MantineTextProps extends TextProps {
  children?: ReactNode;
}

const MantineText = forwardRef<HTMLParagraphElement, MantineTextProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Text ref={ref} mt="sm" mb="lg" {...rest}>
        {children}
      </Text>
    );
  }
);

export default MantineText;
