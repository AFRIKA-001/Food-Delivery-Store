import { createContext, useReducer, useEffect } from "react";

const CartContext = createContext({
  items: [],
  AddItems: () => {},
  RemoveItems: () => {},
  ClearCart: () => {}
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingCartItem = state.items[existingCartItemIndex]
      const updatedItem = {    
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return {
      ...state,
      items: updatedItems
    }
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      items: []
    }
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingCartItem = state.items[existingCartItemIndex]
    const updatedItems = [...state.items]
    
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1)
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems }
  }
    
  return state;
}

export function CartContextProvider({ children }) {
  // 1. Initialize useReducer with data from localStorage if it exists
  const [cartState, dispatchCartItemsAction] = useReducer(cartReducer, { items: [] }, (initialState) => {
    const savedCart = localStorage.getItem('myCartItems');
    return savedCart ? JSON.parse(savedCart) : initialState;
  });

  // 2. Watch for changes to cartState and update localStorage automatically
  useEffect(() => {
    localStorage.setItem('myCartItems', JSON.stringify(cartState));
  }, [cartState]);

  function AddItems(item) {
    dispatchCartItemsAction({ type: "ADD_ITEM", item: item })
  }

  function RemoveItems(id) {
    dispatchCartItemsAction({ type: "REMOVE_ITEM", id: id })
  }

  function ClearCart() {
    dispatchCartItemsAction({ type: "CLEAR_CART" })
  }

  const cartContext = {
    items: cartState.items,
    AddItems,
    RemoveItems,
    ClearCart
  }

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;