import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'

import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
