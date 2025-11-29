import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { BreakpointsProvider } from "./components/Breakpoints/BreakpointsProvider";
import Demos from "./pages/Demos";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <BreakpointsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppShell />}>
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
