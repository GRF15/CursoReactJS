import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import { Routes, Route } from "react-router-dom";
import {getProducts} from "./components/db.js";
import { useEffect } from "react";
import Cart from "./components/NavBar/Cart/Cart.jsx";



export default function App() {

  useEffect(() => {
    getProducts()
      .then(products => {
        console.log("Items fetched from Firebase:", products);
      })
      .catch(error => {
        console.error("Error fetching items from Firebase:", error);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a NaturaLab!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}