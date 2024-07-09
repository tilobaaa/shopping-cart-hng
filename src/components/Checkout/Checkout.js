import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import Navigation from "../Navigation";
import CheckOutImg from '../../Images/CheckCircle.png'
import classes from "./Checkout.module.css";
import { useState } from "react";

const CheckOut = () => {
  const [isClear, setIsClear] = useState(false);
  const navigate = useNavigate()

  const showOverlay = () => {
    setIsClear((prevValue) => !prevValue);
  };

  const navigateHandler =()=>{
    navigate('/')
  }
  return (
    <div>
      <Navigation />
      <form className={classes.checkout} action="">
        <div>
          <label htmlFor="">Email address</label>
          <input type="email" placeholder="myname@mail.com" />
        </div>
        <div>
          <label htmlFor="">Cardholder name</label>
          <input type="text" placeholder="Mary Jane" />
        </div>
        <div>
          <label htmlFor="">Cardholder Number</label>
          <input type="text" placeholder="1342 1234 4567 9786" />
        </div>
        <div>
          <label htmlFor="">Expiration date</label>
          <input type="text" placeholder="MM/YY" />
        </div>

        <div>
          <label htmlFor="">CVV</label>
          <input type="text" placeholder="247" />
        </div>
        <div>
          <label htmlFor="">Country or region</label>
          <select name="" id="">
            <option value="Nigeria">Nigeria</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div className={classes["div-button"]}>
          <button type="button" onClick={showOverlay}>
            Pay $1080
          </button>
        </div>
      </form>
      {isClear && (
        <div className={classes.overlay} onClick={showOverlay}>
          <div className={classes.backdrop}>
            <img src={CheckOutImg} alt="" />
            <h2>Payment Successful</h2>
            <p>Your payment (Purchase #3249) has been confirmed.</p>
            <a href="/print">Print Receipt</a>
            <button onClick={navigateHandler}>Back to Home</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CheckOut;
