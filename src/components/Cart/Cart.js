import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Navigation from "../Navigation";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import leftArrowImg from "../../Images/Arrow - Left 2.png";
import rightArrowPng from "../../Images/Arrow - Right.png";
import { useContext, useRef } from "react";
import CartContext from "../../store/cart-context";

const Cart = () => {
  const navigate = useNavigate();

  

  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const noItems = <p>No items in the cart</p>;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  }
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id );
  };

  const cartItemDeleteHandler = (id, amount, price) => {
    cartCtx.deleteItem({ id, amount, price });
  };

  const navigateHandler = () => {
    hasItems ?  navigate("/cart-continue") : navigate('/products')
   
  };

  const navigateBackHandler = () => {
    navigate("/products");
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
            <h3>Shopping</h3>
          </div>
          {hasItems &&  <div className={classes.continue}>
            <img src={rightArrowPng} alt="" onClick={navigateHandler} />
            <Link to={"/cart-continue"}>
              <p>Continue Shopping</p>
            </Link>
          </div>}
         
        </div>
        <div className={classes["cart-items"]}>
          {hasItems
            ? cartCtx.items.map((item) => (
                <CartItem
                  name={item.name}
                  id={item.id}
                  key={item.id}
                  amount={item.amount}
                  price={item.price}
                  ref={amountInputRef}
                  onAdd={cartItemAddHandler.bind(null, item)}
                  onRemove={cartItemRemoveHandler.bind(null, item.id)}
                  onDelete={cartItemDeleteHandler.bind(null, item.id, item.amount, item.price)}
                />
              ))
            : noItems}
        </div>
        <div className={classes['total-amount']}>
          <p>Total</p>
          <p>{totalAmount}</p>
        </div>
        <div className={classes["button-div"]}>
          {hasItems ? <button onClick={navigateHandler}>Continue</button> : <button onClick={navigateHandler}>Add Items</button>}
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
