import classes from "./Images.module.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { TfiSaveAlt } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import likeImg from '../Images/heart.png';
import cartImg from '../Images/clarity_shopping-cart-outline-badged.png'
import archiveImg from '../Images/archive-add.png'

const Images = (props) => {

  const navigate = useNavigate();

  const navigateHandler=()=>{
    navigate('/cart')
  }
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
        <div onClick={navigateHandler}>
         <img src={cartImg} alt="" />
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
