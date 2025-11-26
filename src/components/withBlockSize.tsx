import React, { type ForwardedRef } from "react";
import { useBlockSize } from "./Block/useBlockContext";
import type { MantineSize } from "@mantine/core";

export function withBlockSize<P extends { size?: MantineSize }, R = unknown>(
  Component: React.ComponentType<P>
) {
  return React.forwardRef<R, P>((props, ref) => {
    const resolvedSize = useBlockSize(props.size);
    return (
      <Component {...props} size={resolvedSize} ref={ref as ForwardedRef<R>} />
    );
  });
}
