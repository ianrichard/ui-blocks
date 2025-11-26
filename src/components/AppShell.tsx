import { AppShell as MantineAppShell, NavLink, Burger } from "@mantine/core";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import { useDisclosure } from "@mantine/hooks";
import Block from ".";
import { IconLayoutGrid } from "@tabler/icons-react";

export function AppShell() {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Block Demo", path: "/block-demo", icon: IconLayoutGrid },
  ];
  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      px="md"
    >
      <MantineAppShell.Header>
        <Block.Section row inset gap>
          <Burger hiddenFrom="sm" opened={opened} onClick={toggle} size="sm" />
          <Block.Title>Block UI</Block.Title>
        </Block.Section>
      </MantineAppShell.Header>
      <MantineAppShell.Navbar p="md">
        <MantineAppShell.Section>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              label={item.label}
              leftSection={<item.icon size={20} />}
              active={location.pathname === item.path}
              onClick={() => {
                navigate(item.path);
                toggle();
              }}
            />
          ))}
        </MantineAppShell.Section>
      </MantineAppShell.Navbar>
      <MantineAppShell.Main>
        <Outlet />
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
