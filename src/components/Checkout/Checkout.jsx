import { useState } from "react";
import "./Checkout.css";
import { useCart } from "../NavBar/Cart/CartContext";
import { getLocalImage } from "../utils/getLocalImage";

export default function Checkout() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    detalles: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { cart } = useCart();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Aquí puedes manejar el envío a Firebase o mostrar un mensaje de éxito
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-main-container">
      <h2>Finalizar compra</h2>
      <div className="checkout-flex">
        {/* Resumen del carrito */}
        <div className="checkout-summary">
          <h3>Resumen de tu compra</h3>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="checkout-summary-item">
                <img src={getLocalImage(item.image)} alt={item.title} className="checkout-summary-img" />
                <span>{item.title} x {item.quantity}</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <h4 className="checkout-total">Total: ${total}</h4>
        </div>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Apellido:
            <input
              type="text"
              name="apellido"
              value={form.apellido}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Correo electrónico:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Teléfono:
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Dirección:
            <input
              type="text"
              name="direccion"
              value={form.direccion}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Detalles adicionales (opcional):
            <textarea
              name="detalles"
              value={form.detalles}
              onChange={handleChange}
              rows={3}
            />
          </label>
          {submitted && <p className="checkout-success">¡Formulario enviado!</p>}
          <div className="checkout-btn-form-container">
            <button type="submit" className="checkout-boton">
              Finalizar compra
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}