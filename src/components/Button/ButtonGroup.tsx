import MantineBlock from "../Block/MantineBlock";
import type { ReactNode } from "react";
import { withBlockSize } from "../Block/withBlockSize";
import type { SizeProp } from "../Size/sizeTypes";

interface ButtonGroupProps {
  size?: SizeProp;
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
