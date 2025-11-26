import { Card } from "@mantine/core";
import { forwardRef } from "react";
import type { BlockProps } from "../Block/Block.types";
import MantineBlock from "../Block/MantineBlock";
import styles from "./Card.module.scss";

const MantineCard = forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
  return (
    <MantineBlock
      className={styles.card}
      ref={ref}
      component={Card}
      {...props}
    />
  );
});

MantineCard.displayName = "MantineCard";

export default MantineCard;
