import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <HashRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </HashRouter>
  </BrowserRouter>


);