import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../db.js";
import { Link } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import "./ItemDetailContainer.css";
import "../NotFound/NotFound.css";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((data) => setProduct(data))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <article className="itemDetailContainer">
      <div className="itemDetailContainer-content">
        {loading ? (
          <p className="cargando">Cargando...</p>
        ) : product ? (
          <ItemDetail item={product} />
        ) : (
          <div className="notfound-container">
            <p className="NoHayResultados">Producto no encontrado</p>
            <Link to="/" className="notfound-btn">
              Volver al inicio
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
