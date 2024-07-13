import productImg from "../../Images/cartpic.png";
import classes from "./CartItem.module.css";
import plusImg from '../../Images/plus.png'
import minusImg from '../../Images/minus.png'
import { useRef } from "react";


const CartItem = (props) => {

  const amountRef= useRef()
  const price = `$${props.price}`;

  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    props.onAdd({ ...props.item, amount: +enteredAmount });

  }

  return (
    <div className={classes['cart-item-div']}>
      <div className={classes["cart-item"]}>
        <div className={classes["summary-cart"]}>
          <img src={productImg} alt="" />
          <div className={classes["cart-description"]}>
            <h3>{props.name}</h3>
            <h2>{price}</h2>
            <p>{`Quantity: ${props.amount}`}</p>
          </div>
        </div>

        <div className={classes["number-input"]}>
          <form onSubmit={submitHandler}></form>
          <img src={minusImg} alt="" onClick={props.onRemove}/>
          <input type="number" id={`amount_${props.id}`} defaultValue="1" ref={amountRef}/>
          <img src={plusImg} alt="" onClick={() => props.onAdd({ ...props, amount: 1 })}/>
        </div>
        <button className={classes.close} onClick={() => props.onDelete(props.id, props.amount, props.price)}>x</button>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
