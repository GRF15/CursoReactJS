import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import './Cart.css';
import { getLocalImage } from "../../utils/getLocalImage";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="notfound-btn">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      <ul className="cart-list">
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <div className="cart-item-content">
              <img src={getLocalImage(item.image)} alt={item.title} className="cart-item-image" />
              <div>
                <h4 className="cart-item-title">{item.title}</h4>
                <p className="cart-item-stock">Stock disponible: {item.stock}</p>
                <div className="cart-item-quantity-controls">
                  <button
                    className="cart-qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >-</button>
                  <span className="cart-item-quantity">{item.quantity}</span>
                  <button
                    className="cart-qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    disabled={item.quantity >= item.stock}
                  >+</button>
                </div>
                <p className="cart-item-price">Precio unitario: ${item.price}</p>
                <p className="cart-item-subtotal">Subtotal: ${item.price * item.quantity}</p>
              </div>
              <button
                className="cart-remove-btn"
                onClick={() => removeFromCart(item.id)}
                title="Eliminar producto"
              >×</button>
            </div>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <Link to="/checkout" className="checkout-btn">
          Ir a Checkout
        </Link>
      )}
      <h3 className="cart-total">
        Total: $
        {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
      </h3>
    </div>
  );
}