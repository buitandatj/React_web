import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ProductProvider from './context/productContext';
import CartProvider from './context/cartContext';
import { UserProvider } from './context/userContext';
import { LoadingProvider } from './context/loadingContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <LoadingProvider>
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <React.StrictMode>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </React.StrictMode>
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  </LoadingProvider>

);

reportWebVitals();
