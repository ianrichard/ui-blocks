import MantineBlock from "../Block/MantineBlock";
import { useSizeProp, type SizeResolvableProps } from "../Size/useSizeProp";
import type { ReactNode } from "react";

interface ButtonGroupProps extends SizeResolvableProps {
  children: ReactNode;
}

const ButtonGroup = ({ children, ...rest }: ButtonGroupProps) => {
  //   const size = useSizeProp(rest);
  //   let gap = "sm";
  //   if (size === "lg" || size === "xl") gap = "sm";
  return (
    <MantineBlock row gap="sm" wrap="wrap" {...rest}>
      {children}
    </MantineBlock>
  );
};

export default ButtonGroup;
