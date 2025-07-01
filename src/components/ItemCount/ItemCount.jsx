import { useState } from "react";
import "./ItemCount.css";

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount((c) => (c < stock ? c + 1 : c));
  const decrement = () => setCount((c) => (c > 1 ? c - 1 : c));

  return (
    <div className="item-count-container">
      <button className="item-count-btn" onClick={decrement}>
        -
      </button>
      <span className="item-count-value">{count}</span>
      <button className="item-count-btn" onClick={increment}>
        +
      </button>
      <button className="item-count-add-btn" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}