import { NavLink } from "@mantine/core";
import type { MouseEvent } from "react";
import { MantineUtilityIcon } from "../Icon/MantineIcon";

interface NavItemProps {
  label: string;
  icon: string;
  id?: string;
  onSelect?: (e: MouseEvent) => void;
}

export function NavItem({ label, icon, id, onSelect, ...rest }: NavItemProps) {
  return (
    <NavLink
      label={label}
      leftSection={<MantineUtilityIcon name={icon} size={16} />}
      {...(id ? { href: `#${id}` } : {})}
      //   mb="sm"
      px="lg"
      py="md"
      onClick={(e) => {
        if (onSelect) onSelect(e);
      }}
      {...rest}
    />
  );
}
