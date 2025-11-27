import { Card } from "@mantine/core";
import { forwardRef } from "react";
import type { BlockProps } from "../Block/Block.types";
import MantineBlock from "../Block/MantineBlock";
import styles from "./Card.module.scss";
import { withBlockSize } from "../withBlockSize";
import type { ReactNode } from "react";

interface MantineCardProps extends BlockProps {
  children?: ReactNode;
}

const MantineCardBase = forwardRef<HTMLDivElement, MantineCardProps>(
  ({ children, ...props }, ref) => {
    const radius = ["xs", "sm", "md"].includes(props.size as string)
      ? "md"
      : "lg";

    return (
      <MantineBlock
        className={styles.card}
        ref={ref}
        component={Card}
        verticalSpace
        radius={radius}
        border={props.border !== undefined ? props.border : true}
        {...props}
      >
        {children}
      </MantineBlock>
    );
  }
);

MantineCardBase.displayName = "MantineCardBase";

const MantineCard = withBlockSize(MantineCardBase);

MantineCard.displayName = "MantineCard";

export default MantineCard;
