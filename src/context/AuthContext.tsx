import React, { createContext, useCallback } from "react";

import api from "../services/api"

interface AuthContextData {
  name: string;
  signIn(credentials: CredentialsData): Promise<void>
}

interface CredentialsData {
  email: string;
  password: string;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

  const signIn = useCallback(async ({email, password}) => {
    const response = api.post('/sessions', {
      email,
      password
    })

    console.log((await response).data)
  }, [])

  return (
    <AuthContext.Provider value={{ name: "Eduardo", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
