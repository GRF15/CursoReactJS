import "../NavBar.css";
import carro from "../../../assets/carro.png";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { getCartCount } = useCart();
  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link">
        <span role="img" className="cart-icon">
          <img src={carro} alt="carrito" className="cart-icon"/> 
        </span>
        <span className="cart-count">{getCartCount()}</span>
      </Link> 
    </div>
  );
}
