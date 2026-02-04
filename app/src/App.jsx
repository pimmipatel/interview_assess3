import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import store from './store';
import Login from './pages/Login';
import Home from './pages/Home';
import Checkout from './pages/Checkout';
import NavBar from './components/NavBar';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Box minH="100vh">
            <NavBar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
