import { forwardRef } from "react";
import type { BlockInputProps } from "./Block.types";
import { useSizeFromPropOrContext } from "./useBlockContext";

export function withBlockSize<P extends BlockInputProps, R = unknown>(
  Component: React.ComponentType<P & { ref?: React.Ref<R> }>
) {
  const Wrapped = forwardRef<R, P>((props, ref) => {
    const resolvedSize = useSizeFromPropOrContext(props);
    return <Component {...(props as P)} size={resolvedSize} ref={ref} />;
  });
  Wrapped.displayName = `withBlockSize(${
    Component.displayName || Component.name
  })`;
  return Wrapped;
}
