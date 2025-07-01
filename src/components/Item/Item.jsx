import { Link } from "react-router-dom";
import "./Item.css";
import { getLocalImage } from "../utils/getLocalImage";

export default function Item({ product }) {
  return (
    <div className="item-card">
      <img src={getLocalImage(product.image)} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p><b>${product.price}</b></p>
      <Link to={`/item/${product.id}`} className="ver-mas-btn">
        Ver detalle
      </Link>
    </div>
  );
}

