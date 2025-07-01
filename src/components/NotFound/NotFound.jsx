import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h3>¡Ups! Página no encontrada</h3>
      <p>La ruta que intentas visitar no existe.</p>
      <Link to="/" className="notfound-btn">
        Volver al inicio
      </Link>
    </div>
  );
}