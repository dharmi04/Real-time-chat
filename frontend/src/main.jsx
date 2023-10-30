import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <BrowserRouter>
  <ChakraProvider>
  <App />
  </ChakraProvider>
    
  </BrowserRouter>,
  document.getElementById('root')
);

