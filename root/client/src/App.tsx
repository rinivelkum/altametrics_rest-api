import { BrowserRouter, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { QueryProvider } from "./providers/QueryProvider";
import { Header } from "./components/Header";
import { LoginForm } from "./components/LoginForm";
import { InvoiceDashboard } from "./components/InvoiceDashboard";
import { useAuth } from "./providers/AuthProvider";
import store from "./store";

function AuthenticatedApp() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <Routes>
      <Route path="invoices" element={<InvoiceDashboard />} />
      <Route
        path="*"
        element={
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="text-6xl font-bold">404</div>
            <div className="text-4xl italic">Not Found</div>
          </div>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Provider store={store}>
      <QueryProvider>
        <BrowserRouter>
          <div className="min-h-screen w-screen flex flex-col">
            <Header />
            <main className="container mx-auto py-6 flex-1 flex items-center justify-center">
              <AuthenticatedApp />
            </main>
          </div>
        </BrowserRouter>
      </QueryProvider>
    </Provider>
  );
}

export default App;
