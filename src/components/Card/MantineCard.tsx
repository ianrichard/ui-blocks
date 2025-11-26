import { Card } from "@mantine/core";
import { forwardRef } from "react";
import type { BlockProps } from "../Block/Block.types";
import MantineBlock from "../Block/MantineBlock";
import styles from "./Card.module.scss";
// import { useBlockSize } from "../Block/useBlockContext";

const MantineCard = forwardRef<HTMLDivElement, BlockProps>((props, ref) => {
  // const size = useBlockSize(props.size);
  return (
    <MantineBlock
      className={styles.card}
      ref={ref}
      component={Card}
      // size={size}
      // radius={size}
      verticalSpace
      {...props}
    />
  );
});

MantineCard.displayName = "MantineCard";

export default MantineCard;
