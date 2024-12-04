
import React, { createContext, useContext, useReducer, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  color: string;
  size: string;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeFromCart: (id: number) => void;
  checkout: () => void;
}

const initialState: CartState = {
  cart: [],
  addToCart: () => {},
  increaseQty: () => {},
  decreaseQty: () => {},
  removeFromCart: () => {},
  checkout: () => {},
};

const CartContext = createContext<CartState>(initialState);

const cartReducer = (state: CartItem[], action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1 }];
      }

    case 'INCREASE_QTY':
      return state.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

    case 'DECREASE_QTY':
      return state.map((item) =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );

    case 'REMOVE_FROM_CART':
      return state.filter((item) => item.id !== action.payload);

    case 'CHECKOUT':
      localStorage.removeItem('cart');
      return [];
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => dispatch({ type: 'ADD_TO_CART', payload: item });
  const increaseQty = (id: number) => dispatch({ type: 'INCREASE_QTY', payload: id });
  const decreaseQty = (id: number) => dispatch({ type: 'DECREASE_QTY', payload: id });
  const removeFromCart = (id: number) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  const checkout = () => dispatch({ type: 'CHECKOUT' });

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQty, decreaseQty, removeFromCart, checkout }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
