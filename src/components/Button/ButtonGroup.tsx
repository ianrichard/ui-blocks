import MantineBlock from "../Block/MantineBlock";
import { type SizeResolvableProps } from "../Size/useSizeProp";
import type { ReactNode } from "react";
import { withBlockSize } from "../withBlockSize";
import type { MantineSize } from "@mantine/core";

interface ButtonGroupProps extends SizeResolvableProps {
  children?: ReactNode;
  size?: MantineSize;
}

const ButtonGroupBase = ({
  children,
  size = "md",
  ...rest
}: ButtonGroupProps) => {
  // Set gap based on size
  const gap = ["xs", "sm", "md"].includes(size) ? "sm" : "md";
  return (
    <MantineBlock row gap={gap} wrap="wrap" size={size} mt={gap} {...rest}>
      {children}
    </MantineBlock>
  );
};

const ButtonGroup = withBlockSize(ButtonGroupBase);

export default ButtonGroup;
