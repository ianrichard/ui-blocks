import type { ReactNode } from "react";
import Block from "..";
import { AppShellDesktop } from "./AppShellDesktop";
import { AppShellMobile } from "./AppShellMobile";

export function AppShellHeader({ children }: { children: ReactNode }) {
  return children;
}
export function AppShellNav({ children }: { children: ReactNode }) {
  return children;
}
export function AppShellContent({ children }: { children: ReactNode }) {
  return children;
}

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <Block.Section
      children={<AppShellMobile>{children}</AppShellMobile>}
      childrenMd={<AppShellDesktop>{children}</AppShellDesktop>}
    />
  );
}

AppShell.Header = AppShellHeader;
AppShell.Nav = AppShellNav;
AppShell.Content = AppShellContent;
