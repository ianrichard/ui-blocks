import { type NavItem as NavItemType } from "../Nav/navItemsTypes";
import { AppShellMobile } from "./AppShellMobile";
import { AppShellDesktop } from "./AppShellDesktop";
import Block from "..";
import type { MouseEvent, ReactNode } from "react";

export interface AppShellProps {
  navItems: NavItemType[];
  onNavItemSelect: (e: MouseEvent) => void;
  header: ReactNode;
  children: ReactNode;
}

export function AppShell({
  navItems,
  onNavItemSelect,
  header,
  children,
}: AppShellProps) {
  return (
    <Block.Section
      children={
        <AppShellMobile
          navItems={navItems}
          onSelect={onNavItemSelect}
          header={header}
        >
          {children}
        </AppShellMobile>
      }
      childrenMd={
        <AppShellDesktop
          navItems={navItems}
          onSelect={onNavItemSelect}
          header={header}
        >
          {children}
        </AppShellDesktop>
      }
    />
  );
}
