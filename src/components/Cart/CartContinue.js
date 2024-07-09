import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Navigation from "../Navigation";
import CartItem from "./CartItem";
import classes from "./CartContinue.module.css";
import paypalImg from "../../Images/paypal.png";
import paystackImg from "../../Images/paystack.png";
import masterCardImg from "../../Images/mastercard.png";
import visaImg from "../../Images/visa.png";

const CartContinue = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <Navigation />
      <div className={classes["cart-group"]}>
        <div className={classes.cart}>
          <h3>My Cart</h3>
          <CartItem />
          <CartItem />
          <div className={classes["button-div"]}>
            <button onClick={navigateHandler}>Continue</button>
          </div>
        </div>
        <div className={classes["summary-div"]}>
          <div className={classes.summary}>
            <h3>Order Summary (2 items)</h3>
            <hr />
            <div>
              <input type="text" placeholder="Enter discount code" />
              <button>Apply</button>
            </div>
            <hr />
            <div>
              <p>Subtotal</p>
              <p>$980</p>
            </div>
            <hr />
            <div>
              <p>Shipping fees</p>
              <p>$100</p>
            </div>
            <hr />
            <div>
              <p>Total</p>
              <p>$1080</p>
            </div>
            <hr />
            <button className={classes.button} onClick={navigateHandler}>Proceed to Checkout</button>
          </div>
          <div className={classes.icons}>
            <img src={paystackImg} alt="paystack" />
            <img src={masterCardImg} alt="masterCard" />
            <img src={visaImg} alt="visa" />
            <img src={paypalImg} alt="" />
          </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartContinue;
