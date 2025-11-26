import MantineBlock from "../Block/MantineBlock";
import type { BlockProps } from "../Block/Block.types";
import classNames from "classnames";

import styles from "./Section.module.scss";

const MantineSection = (props: BlockProps) => {
  const { className, ...other } = props;
  return (
    <MantineBlock
      className={classNames(styles.section, className)}
      {...other}
    />
  );
};

export default MantineSection;
