import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AppShell } from "./components/AppShell/AppShell";
import { BreakpointsProvider } from "./components/Breakpoints/BreakpointsProvider";
import Demos from "./pages/Demos";
import type { MouseEvent } from "react";
import { NavItem } from "./components/Nav/NavItem";

const navItems = [
  { label: "Cards", id: "card-demo", icon: "IconCards" },
  { label: "Grid", id: "grid-demo", icon: "IconLayoutGrid" },
  { label: "Backgrounds", id: "background-demo", icon: "IconPalette" },
  { label: "Buttons", id: "button-demo", icon: "IconSquareRounded" },
  { label: "Markdown", id: "markdown-demo", icon: "IconMarkdown" },
  { label: "Typography", id: "typography-demo", icon: "IconTypography" },
];

function scrollToSection(e: MouseEvent) {
  e.preventDefault();
  const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
  if (href && href.startsWith("#")) {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <BreakpointsProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <AppShell>
                  <AppShell.Header>Block UI</AppShell.Header>
                  <AppShell.Nav>
                    {navItems.map((item, index) => (
                      <NavItem
                        key={index}
                        onClick={scrollToSection}
                        {...item}
                      />
                    ))}
                  </AppShell.Nav>
                  <AppShell.Content>
                    <Outlet />
                  </AppShell.Content>
                </AppShell>
              }
            >
              <Route index element={<Navigate to="/demos" replace />} />
              <Route path="demos" element={<Demos />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BreakpointsProvider>
    </MantineProvider>
  );
}

export default App;
