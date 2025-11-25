import { forwardRef } from "react";
import { Text } from "@mantine/core";
import type { TextProps } from "@mantine/core";
import type { ReactNode } from "react";
import styles from "./Text.module.scss";
import classNames from "classnames";

interface MantineTextProps extends TextProps {
  children?: ReactNode;
}

const MantineText = forwardRef<HTMLParagraphElement, MantineTextProps>(
  (props, ref) => {
    const { children, className, ...other } = props;
    return (
      <Text className={classNames(styles.text, className)} ref={ref} {...other}>
        {children}
      </Text>
    );
  }
);

export default MantineText;
