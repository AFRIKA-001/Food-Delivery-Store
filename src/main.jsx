import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CartContextProvider } from './store/CartContext.jsx'
import { UserProgressContextProvider } from './store/UserProgressContext.jsx'
import { UserAuthContextProvider } from './store/UserAuthContext.jsx'
import { SearchBarContextProvider } from './store/SearchBarContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/Routing.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <UserAuthContextProvider>
      <SearchBarContextProvider>
        <UserProgressContextProvider>
          <CartContextProvider>
            <RouterProvider router={router} />
          </CartContextProvider>
        </UserProgressContextProvider>
      </SearchBarContextProvider>
    </UserAuthContextProvider>
  </StrictMode>,
)
