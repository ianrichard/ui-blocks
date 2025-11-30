import type { NavItem as NavItemType } from "./navItemsTypes";
import { NavItem } from "./NavItem";

export interface NavItemsProps {
  navItems: NavItemType[];
}

export function NavItems({ navItems }: NavItemsProps) {
  return (
    <>
      {navItems.map((item, index) => (
        <NavItem key={index} {...item} />
      ))}
    </>
  );
}
