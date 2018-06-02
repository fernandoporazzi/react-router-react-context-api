import React, {Component} from 'react';
import ContextProvider, { Consumer } from './Context';

import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Main from './components/pages/Main';

const App = () => (
  <ContextProvider>
    <Header />
    <Main />
    <Footer />
  </ContextProvider>
);

export default App;