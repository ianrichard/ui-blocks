import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from './components/AppShell';
import { MantineBlockDemo } from './pages/MantineBlockDemo';

function App() {
  return (
    <MantineProvider defaultColorScheme="auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppShell />}>
            <Route index element={<Navigate to="/block-demo" replace />} />
            <Route path="block-demo" element={<MantineBlockDemo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
