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
import { AppShellMobileNavContext } from "./components/AppShell/AppShellMobileNavContext";
import { useState } from "react";
import styles from "./App.module.scss";

const navItems = [
  { label: "Cards", id: "card-demo", icon: "IconCards" },
  { label: "Grid", id: "grid-demo", icon: "IconLayoutGrid" },
  { label: "Backgrounds", id: "background-demo", icon: "IconPalette" },
  { label: "Buttons", id: "button-demo", icon: "IconSquareRounded" },
  { label: "Markdown", id: "markdown-demo", icon: "IconMarkdown" },
  { label: "Typography", id: "typography-demo", icon: "IconTypography" },
];

function App() {
  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  function closeNav() {
    setMobileNavOpened(false);
  }
  function openNav() {
    setMobileNavOpened(true);
  }

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
    closeNav(); // Always close nav on selection
  }

  return (
    <div className={styles.app}>
      <MantineProvider defaultColorScheme="dark">
        <BreakpointsProvider>
          <AppShellMobileNavContext.Provider
            value={{
              closeNav,
              openNav,
              opened: mobileNavOpened,
              setOpened: setMobileNavOpened,
            }}
          >
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
          </AppShellMobileNavContext.Provider>
        </BreakpointsProvider>
      </MantineProvider>
    </div>
  );
}

export default App;
