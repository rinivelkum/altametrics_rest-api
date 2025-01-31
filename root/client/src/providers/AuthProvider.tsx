import { useSelector, useDispatch } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import {
  selectIsAuthenticated,
  selectToken,
  setCredentials,
  logout,
} from "@/slices/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const token = useSelector(selectToken);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const login = (token: string) => {
    dispatch(setCredentials({ token }));
  };

  const handleLogout = () => {
    dispatch(logout());
    queryClient.removeQueries();
  };

  return { token, isAuthenticated, login, logout: handleLogout };
};
