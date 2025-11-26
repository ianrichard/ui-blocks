import { AppShell as MantineAppShell, NavLink, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { IconLayoutGrid } from "@tabler/icons-react";

export function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure(false);

  const navItems = [
    { label: "Block Demo", path: "/block-demo", icon: IconLayoutGrid },
  ];

  return (
    <MantineAppShell
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <MantineAppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
          mr="xl"
        />
        <h2 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>
          Block UI
        </h2>
      </MantineAppShell.Header>

      <MantineAppShell.Navbar p="md">
        <MantineAppShell.Section>
          <div style={{ marginBottom: "1rem" }}>
            {/* Hide title on mobile, since it's in header */}
            <h2
              style={{
                margin: 0,
                fontSize: "1.25rem",
                fontWeight: 600,
                display: "none",
              }}
            >
              Block UI
            </h2>
            <p
              style={{
                margin: "0.25rem 0 0",
                fontSize: "0.875rem",
                color: "var(--mantine-color-dimmed)",
              }}
            >
              Component Library
            </p>
          </div>
        </MantineAppShell.Section>

        <MantineAppShell.Section grow mt="md">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              label={item.label}
              leftSection={<item.icon size={20} />}
              active={location.pathname === item.path}
              onClick={() => {
                navigate(item.path);
                toggle(); // close navbar on mobile after navigation
              }}
              style={{ borderRadius: "0.5rem", marginBottom: "0.25rem" }}
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
