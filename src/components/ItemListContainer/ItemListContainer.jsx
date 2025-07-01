import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../db.js";
import ItemList from "../ItemList/ItemList.jsx";

export default function ItemListContainer({ mensaje }) {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <section className="contenidoMostrado">
      <h1>{mensaje}</h1>
      <div className="itemListContainer">
        {loading ? (
          <p className="cargando">Cargando...</p>
        ) : (
          <ItemList products={products} />
        )}
      </div>
    </section>
  );
}
