import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './App.css'
import 'toastr/build/toastr.min.css';
import { ThemeProvider } from '@material-tailwind/react'
import { CartProvider } from './context/CartContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
