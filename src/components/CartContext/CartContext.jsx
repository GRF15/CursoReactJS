import { createContext, useContext, useState } from "react";
import "./CartContext.css";
import Swal from "sweetalert2";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
   
  function addToCart(product, quantity) {
    const NoStock = Swal.mixin({
    icon: "error",
    title: "No hay suficiente stock",
    allowOutsideClick: false,
    text: `Has agregado todos los ${product.title} que tenemos en stock.`,
    showConfirmButton: true,
    background: '#ffee98',
    customClass: {
      confirmButton: "no-stock-confirm-btn",
      popup: "no-stock-popup",
    },
    didOpen: (NoStock) => {
    }
  });

    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        const newQuantity = found.quantity + quantity;
        if (newQuantity > product.stock) {
           NoStock.fire();
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: product.stock }
            : item
        );
      }
      return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: newQuantity }
            : item
        );
      }
      return [...prev, { ...product, quantity: Math.min(quantity, product.stock) }];
    });
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  }

  function updateQuantity(productId, newQuantity) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, newQuantity) }
          : item
      )
    );
  }

  function getCartCount() {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        getCartCount,
        removeFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}