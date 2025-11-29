import { forwardRef } from "react";
import { Accordion } from "@mantine/core";
import type { ReactNode } from "react";

export interface AccordionProps {
  children: ReactNode;
  defaultValue?: string | null;
  multiple?: boolean;
  variant?: "default" | "contained" | "filled" | "separated";
  radius?: string | number;
  order?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const MantineAccordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      children,
      defaultValue,
      multiple,
      variant,
      radius,
      order,
      className,
      ...others
    },
    ref
  ) => {
    return (
      <div ref={ref} className={className}>
        <Accordion
          defaultValue={defaultValue}
          multiple={multiple}
          variant={variant}
          radius={radius}
          order={order}
          {...others}
        >
          {children}
        </Accordion>
      </div>
    );
  }
);

MantineAccordion.displayName = "Block.Accordion";

// Subcomponents
const AccordionItem = Accordion.Item;
const AccordionControl = Accordion.Control;
const AccordionPanel = Accordion.Panel;

export { AccordionItem, AccordionControl, AccordionPanel };
export default MantineAccordion;
