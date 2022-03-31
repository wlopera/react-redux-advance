import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispacth = useDispatch();

  const toggleCardHandler = () => {
    dispacth(uiActions.toggle());
  };

  const cartQuantity = useSelector((state) => state.cart.totalQuality);

  return (
    <button className={classes.button} onClick={toggleCardHandler}>
      <span>Mi Carrito</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
