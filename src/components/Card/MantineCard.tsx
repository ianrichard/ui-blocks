import { Card } from "@mantine/core";
import { forwardRef } from "react";
import type { BlockProps } from "../Block/Block.types";
import MantineBlock from "../Block/MantineBlock";
import styles from "./MantineCard.module.scss";

export interface CardProps extends BlockProps {
  border?: boolean;
}

const MantineCard = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { children, border = true, size, ...blockProps } = props;

  return (
    <MantineBlock
      className={styles.container}
      withBorder={border}
      ref={ref}
      component={Card}
      size={size}
      {...blockProps}
    >
      {children}
    </MantineBlock>
  );
});

MantineCard.displayName = "MantineCard";

export default MantineCard;
