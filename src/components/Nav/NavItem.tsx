import { NavLink } from "@mantine/core";
import { MantineUtilityIcon } from "../Icon/MantineIcon";
import type { MouseEvent } from "react";

interface NavItemProps {
  label: string;
  icon?: string;
  id?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export function NavItem({ label, icon, id, onClick, ...rest }: NavItemProps) {
  return (
    <NavLink
      label={label}
      leftSection={<MantineUtilityIcon name={icon} size={16} />}
      {...(id ? { href: `#${id}` } : {})}
      onClick={onClick}
      px="lg"
      py="md"
      {...rest}
    />
  );
}
