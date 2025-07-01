import { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { useCart } from "../NavBar/Cart/CartContext.jsx";
import { getLocalImage } from "../utils/getLocalImage.jsx";
import Swal from "sweetalert2";

function ItemDetail({ item }) {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  const AddedToCart = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    showCloseButton: true,
    timerProgressBar: true,
    timer: 2500,
    imageUrl: getLocalImage(item.image),
    background: '#ffee98',
    imageAlt: item.title,
    title: '</h2><h2 class="added-to-cart-title">¡Agregado al carrito!',
    customClass: {
      image: "added-to-cart-image",
      popup: "added-to-cart-popup",
    },
    didOpen: (AddedToCart) => {
      AddedToCart.onmouseenter = Swal.stopTimer;
      AddedToCart.onmouseleave = Swal.resumeTimer;
    }
  });


   function handleAdd(qty) {
    addToCart(item, qty);
    setAddedToCart(true);
    AddedToCart.fire();
  }


  return (
    <div className="item-detail-card">
      <img src={getLocalImage(item.image)} alt={item.title} />
      <div className="item-detail-info">
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p><b>${item.price}</b></p>
        <p>En stock: {item.stock}</p>
        {!addedToCart && (
          <ItemCount stock={item.stock} initial={1} onAdd={(handleAdd)} />
        )}
        {addedToCart && (
          <div className="added-message">
            Producto agregado al carrito.
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
