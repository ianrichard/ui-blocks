import { Outlet } from "react-router-dom";
import { Burger, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Block from ".";
import {
  IconCards,
  IconLayoutGrid,
  IconTypography,
  IconMarkdown,
  IconPalette,
  IconSquareRounded,
} from "@tabler/icons-react";

export function AppShell() {
  const [opened, { toggle }] = useDisclosure();

  const navItems = [
    { label: "Cards", id: "card-demo", icon: IconCards },
    { label: "Grid", id: "grid-demo", icon: IconLayoutGrid },
    { label: "Backgrounds", id: "background-demo", icon: IconPalette },
    { label: "Buttons", id: "button-demo", icon: IconSquareRounded },
    { label: "Markdown", id: "markdown-demo", icon: IconMarkdown },
    { label: "Typography", id: "typography-demo", icon: IconTypography },
  ];

  return (
    <Block.Section row minHeight="100vh">
      <Block.Section column borderRight minWidth={280}>
        <Block.Section
          // row
          alignMiddle
          innerSpace
          gap
          style={{
            position: "sticky",
            top: 0,
          }}
        >
          {/* <Burger hiddenFrom="sm" opened={opened} onClick={toggle} size="sm" /> */}
          <Block.Title pl="sm" pb="sm">
            <Burger
              hiddenFrom="sm"
              opened={opened}
              onClick={toggle}
              size="sm"
            />
            Block UI
          </Block.Title>

          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={`#${item.id}`}
              label={item.label}
              leftSection={<item.icon size={20} />}
              mb="sm"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            />
          ))}
        </Block.Section>
      </Block.Section>
      <Block.Section innerSpace="xl">
        <Outlet />
      </Block.Section>
    </Block.Section>
  );
}
