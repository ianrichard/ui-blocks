import { Card } from "@mantine/core";
import { forwardRef } from "react";
import type { BlockInputProps } from "../Block/Block.types";
import MantineBlock from "../Block/MantineBlock";
import styles from "./Card.module.scss";
import { withBlockSize } from "../Block/withBlockSize";
import type { ReactNode } from "react";

interface MantineCardProps extends BlockInputProps {
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
        // outerSpaceTopBottom
        radius={radius}
        border={props.border !== undefined ? props.border : true}
        {...props}
        background
      >
        {children}
      </MantineBlock>
    );
  }
);

MantineCardBase.displayName = "MantineCardBase";

const MantineCard = withBlockSize(
  MantineCardBase
) as React.ForwardRefExoticComponent<
  MantineCardProps & React.RefAttributes<HTMLDivElement>
>;

MantineCard.displayName = "MantineCard";

export default MantineCard;
