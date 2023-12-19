import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const baseUrl: string = "https://todoo.5xcamp.us";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

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
