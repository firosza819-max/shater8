import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { ToastProvider } from '@/context/ToastContext';
import { AppShell } from '@/components/AppShell';
import { AdminPanel } from '@/pages/AdminPanel';
import { PurchasesPage } from '@/pages/PurchasesPage';
import { SalesPage } from '@/pages/SalesPage';
import { InventoryPage } from '@/pages/InventoryPage';
import { InvoicesPage } from '@/pages/InvoicesPage';
import { LauncherPage } from '@/pages/LauncherPage';

export default function App() {
  const Router = window.location.protocol === 'file:' ? HashRouter : BrowserRouter;

  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<LauncherPage />} />
            <Route
              path="/admin"
              element={
                <AppShell>
                  <AdminPanel />
                </AppShell>
              }
            />
            <Route
              path="/purchases"
              element={
                <AppShell>
                  <PurchasesPage />
                </AppShell>
              }
            />
            <Route
              path="/sales"
              element={
                <AppShell>
                  <SalesPage />
                </AppShell>
              }
            />
            <Route
              path="/inventory"
              element={
                <AppShell>
                  <InventoryPage />
                </AppShell>
              }
            />
            <Route
              path="/invoices"
              element={
                <AppShell>
                  <InvoicesPage />
                </AppShell>
              }
            />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
}
