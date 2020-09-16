import React from "react";

import Login from "./pages/Login";
// import Signup from './pages/Signup'

import ToastContainer from "./components/ToastContainer";

import { AuthProvider } from "./hooks/AuthContext";

import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Login />
    </AuthProvider>

    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
