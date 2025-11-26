import { forwardRef } from "react";
import { Text } from "@mantine/core";
import type { TextProps } from "@mantine/core";
import type { ReactNode } from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";
import { withBlockSize } from "../withBlockSize";
import type { MantineSize } from "@mantine/core";

interface MantineTextProps extends TextProps {
  children?: ReactNode;
  size?: MantineSize;
}

const MantineTextBase = forwardRef<HTMLParagraphElement, MantineTextProps>(
  (props, ref) => {
    const { children, className, size = "md", ...other } = props;
    return (
      <Text
        className={classNames(styles.text, styles[size], className)}
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
