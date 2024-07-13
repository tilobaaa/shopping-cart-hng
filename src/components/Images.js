import classes from "./Images.module.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import likeImg from "../Images/heart.png";
import cartImg from "../Images/clarity_shopping-cart-outline-badged.png";
import archiveImg from "../Images/archive-add.png";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const Images = (props) => {
  const cartCtx = useContext(CartContext);
  // const navigate = useNavigate();

  // const navigateHandler = () => {
  //   navigate("/cart");
  // };

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price,
    });
  };
  return (
    <div className={classes.images}>
      <img src={props.src} alt="" />
      <div className={classes.other}>
        <div className={classes.stars}>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
        <div className={classes["text-content"]}>
          <p>{props.title}</p>
          <p> {props.price}</p>
        </div>
      </div>
      <div className={classes.icons}>
        <div>
          {" "}
          <img src={likeImg} alt="" />
        </div>
        <div >
          <img src={cartImg} alt="" onClick={addToCartHandler}/>
        </div>
        <div>
          {" "}
          <img src={archiveImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Images;
