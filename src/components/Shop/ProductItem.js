import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import { cartActions } from "../../store/cart-slice";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  const dispath = useDispatch();

  const addToCartHandler = () => {
    dispath(
      cartActions.addItemToCart({
        id,
        title,
        price,
        description,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Agregar al carrito</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
