import React from "react";

import Login from "./pages/Login";
// import Signup from './pages/Signup'

import { AuthProvider } from "./context/AuthContext";

import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Login />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
