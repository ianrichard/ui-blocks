import MantineBlock from "../Block/MantineBlock";
import { type SizeResolvableProps } from "../Size/useSizeProp";
import type { ReactNode } from "react";
import { withBlockSize } from "../withBlockSize";

interface ButtonGroupProps extends SizeResolvableProps {
  children?: ReactNode;
}

const ButtonGroupBase = ({
  children,
  size = "md",
  ...rest
}: ButtonGroupProps) => {
  const gap = ["xs", "sm", "md"].includes(size) ? "sm" : "md";
  return (
    <MantineBlock row gap={gap} wrap="wrap" mt={gap} {...rest}>
      {children}
    </MantineBlock>
  );
};

const ButtonGroup = withBlockSize(ButtonGroupBase);

export default ButtonGroup;
