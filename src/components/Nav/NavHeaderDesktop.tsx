import Block from "..";
import type { ReactNode } from "react";

interface NavHeaderDesktopProps {
  children?: ReactNode;
}

export function NavHeaderDesktop({ children }: NavHeaderDesktopProps) {
  return <Block.Title>{children}</Block.Title>;
}
