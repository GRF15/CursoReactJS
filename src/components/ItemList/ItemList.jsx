import Item from "../Item/Item.jsx";
import "./ItemList.css";
import "../NotFound/NotFound.css";
import { Link } from "react-router-dom";

export default function ItemList({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="no-products-msg">
      <p>Lamentablemente no hay productos disponibles en esta categoría.</p>
      <Link to="/" className="notfound-btn">
        Volver al inicio
      </Link>
      </div>
    );
  }
  return (
    <div className="item-list">
      {products.map((prod) => (
        <Item key={prod.id} product={prod} />
      ))}
    </div>
  );
}