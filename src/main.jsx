import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import { UserAuthContextProvider } from "./store/UserAuthContext.jsx";
import { SearchBarContextProvider } from "./store/SearchBarContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/Routing.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserAuthContextProvider>
      <SearchBarContextProvider>
        <UserProgressContextProvider>
          <CartContextProvider>
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                duration: 1000,
                style: {
                  background: "oklch(14.1% 0.005 285.823))",
                  color: "#000",
                  border: "1px #1e293b",
                  padding: "16px",
                  borderRadius: "16px",
                },
              }}
            />
            <RouterProvider router={router} />
          </CartContextProvider>
        </UserProgressContextProvider>
      </SearchBarContextProvider>
    </UserAuthContextProvider>
  </StrictMode>,
);
