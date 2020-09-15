import React from 'react';

import Login from './pages/Login'
import Signup from './pages/Signup'

import GlobalStyle from './styles/global'

const App: React.FC = () => (
  <>
  <GlobalStyle />
    <Signup />
  </>
)

export default App;
