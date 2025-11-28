import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { MantineBlockDemo } from "./pages/MantineBlockDemo";
import { BreakpointsProvider } from "./components/Breakpoints/BreakpointsProvider";

function App() {
  return (
    <MantineProvider defaultColorScheme="light">
      <BreakpointsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppShell />}>
              <Route index element={<Navigate to="/block-demo" replace />} />
              <Route path="block-demo" element={<MantineBlockDemo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BreakpointsProvider>
    </MantineProvider>
  );
}

export default App;
