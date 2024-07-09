import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Navigation from "../Navigation";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import leftArrowImg from "../../Images/Arrow - Left 2.png";

const Cart = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/cart-continue");
  };

  const navigateBackHandler = () => {
    navigate("..");
  };
  return (
    <div>
      <Navigation />

      <div className={classes.cart}>
        <div className={classes.titleGand}>
          <div className={classes.title}>
            <img
              src={leftArrowImg}
              alt="left arrow"
              onClick={navigateBackHandler}
            />
            <h3>My Cart</h3>
          </div>

          <p>Continue Shopping</p>
        </div>

        <CartItem />
        <CartItem />

        <div className={classes["button-div"]}>
          <button onClick={navigateHandler}>Continue</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
