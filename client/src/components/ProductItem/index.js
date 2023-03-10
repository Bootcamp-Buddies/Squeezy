import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const state = useSelector((state) => { return state });
  const dispatch = useDispatch();
  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;
  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card card-container">
      <h2 className="card-header">{name}</h2>

      <Link to={`/products/${_id}`}>
        <img
          className="card-image"
          alt={name}
          src={`/images/${image}`}
        />
        {/* <h3 className="title">{name}</h3> */}
        <div className="card-text">
          {/* <span>{name}</span> */}
        </div>

        <div class="overlay">
        </div>
        {/* <button className="add-cart-button" onClick={addToCart}></button> */}
        <div className="overlay-container">
        <p className="stock">{quantity} {pluralize("item", quantity)} in stock</p>
        <p className="price">${price}/lb</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
      </Link>

    </div>
  );
}

export default ProductItem;
