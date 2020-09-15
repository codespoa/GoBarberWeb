import React, { createContext, useCallback, useState } from "react";

import api from "../services/api";

interface AuthContextData {
  user: object;
  signIn(credentials: CredentialsData): Promise<void>;
}

interface AuthState {
  token: string;
  user: object;
}

interface CredentialsData {
  email: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@gobarber:token");
    const user = localStorage.getItem("@gpbarber:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("@gobarber:token", token);
    localStorage.setItem("@gpbarber:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
