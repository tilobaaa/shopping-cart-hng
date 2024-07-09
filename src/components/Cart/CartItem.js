import productImg from "../../Images/cartpic.png";
import classes from "./CartItem.module.css";

const CartItem = () => {
  return (
    <div className={classes['cart-item-div']}>
      <div className={classes["cart-item"]}>
        <div className={classes["summary-cart"]}>
          <img src={productImg} alt="" />
          <div className={classes["cart-description"]}>
            <h3>Hotel T-shirt</h3>
            <h2>$490</h2>
            <p>Quantity: 1</p>
          </div>
        </div>

        <div className={classes["number-input"]}>
          <button onclick="" className={classes.minus}>-</button>
          <input type="number" id="number" defaultValue="1" />
          <button onclick="">+</button>
        </div>
        <button className={classes.close}>x</button>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
