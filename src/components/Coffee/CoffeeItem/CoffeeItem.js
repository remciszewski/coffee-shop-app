import { useContext } from "react";

import CoffeeItemForm from "./CoffeeItemForm";
import classes from "./CoffeeItem.module.css";
import CartContext from "../../../store/cart-context";

const CoffeeItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.coffee}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <CoffeeItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default CoffeeItem;
