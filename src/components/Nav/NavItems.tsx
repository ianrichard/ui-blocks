import type { NavItem as NavItemType } from "./navItemsTypes";
import { NavItem } from "./NavItem";
import type { MouseEvent } from "react";

export interface NavItemsProps {
  navItems: NavItemType[];
  onSelect?: (e: MouseEvent) => void;
}

export function NavItems({ navItems, onSelect }: NavItemsProps) {
  return (
    <>
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} onSelect={onSelect} />
      ))}
    </>
  );
}
