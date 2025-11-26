import { Card } from "@mantine/core";
import { forwardRef } from "react";
import type { BlockProps } from "../Block/Block.types";
import MantineBlock from "../Block/MantineBlock";
import styles from "./Card.module.scss";
import { withBlockSize } from "../withBlockSize";

const MantineCardBase = forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
  const radius = ["xs", "sm", "md"].includes(props.size) ? "md" : "lg";

  return (
    <MantineBlock
      className={styles.card}
      ref={ref}
      component={Card}
      verticalSpace
      radius={radius}
      border={props.border !== undefined ? props.border : true}
      {...props}
    />
  );
});

MantineCardBase.displayName = "MantineCardBase";

const MantineCard = withBlockSize(MantineCardBase);

MantineCard.displayName = "MantineCard";

export default MantineCard;
