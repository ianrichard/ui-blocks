import MantineBlock from "../Block/MantineBlock";
import type { ReactNode } from "react";
import { withBlockSize } from "../Block/withBlockSize";
import type { SizeInputProp } from "../Block/Block.types";

interface ButtonGroupProps {
  size?: SizeInputProp;
  children?: ReactNode;
}

const ButtonGroupBase = ({
  children,
  size = "md",
  ...rest
}: ButtonGroupProps) => {
  const gap = ["xs", "sm", "md"].includes(size) ? "xs" : "md";
  return (
    <MantineBlock row gap={gap} wrap="wrap" mt={gap} {...rest}>
      {children}
    </MantineBlock>
  );
};

const ButtonGroup = withBlockSize(ButtonGroupBase);

export default ButtonGroup;
