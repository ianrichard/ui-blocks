import { forwardRef } from "react";
import { Text } from "@mantine/core";
import type { TextProps } from "@mantine/core";
import type { ReactNode } from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";
import { withBlockSize } from "../Block/withBlockSize";
import type { TextSizeInputProp } from "../Block/Block.types";

interface MantineTextProps extends TextProps {
  children?: ReactNode;
  textSize?: TextSizeInputProp;
}

const MantineTextBase = forwardRef<HTMLParagraphElement, MantineTextProps>(
  (props, ref) => {
    const { children, className, textSize = "md", ...other } = props;
    return (
      <Text
        className={classNames(styles.text, styles[textSize], className)}
        ref={ref}
        {...other}
      >
        {children}
      </Text>
    );
  }
);

const MantineText = withBlockSize(MantineTextBase);

export default MantineText;
