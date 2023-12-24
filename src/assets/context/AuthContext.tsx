import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextProps {
  token: string | null;
  username: string | null;
  login: (newToken: string, newUsername: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const baseUrl: string = "https://todoo.5xcamp.us";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const login = (newToken: string, newUsername: string) => {
    setToken(newToken);
    setUsername(newUsername);
  };
  const logout = () => {
    setToken(null);
    setUsername(null);
  };
  return (
    <AuthContext.Provider value={{ token, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
