import { Button } from "./ui/button";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router";

export function Header() {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <h1 className="text-xl font-bold">Invoice App</h1>
      {isAuthenticated && (
        <div className="space-x-4">
          <Button onClick={() => navigate("/invoices")}>Invoices</Button>
          <Button variant="outline" onClick={logout}>
            Logout
          </Button>
        </div>
      )}
    </header>
  );
}
