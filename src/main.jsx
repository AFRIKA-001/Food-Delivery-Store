import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartContextProvider } from './store/CartContext.jsx'
import { UserProgressContextProvider } from './store/UserProgressContext.jsx'
import { UserAuthContextProvider } from './store/UserAuthContext.jsx'
import { SearchBarContextProvider } from './store/SearchBarContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <SearchBarContextProvider>
      <UserAuthContextProvider>
        <UserProgressContextProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </UserProgressContextProvider>
      </UserAuthContextProvider>
    </SearchBarContextProvider>
  </StrictMode>,
)
