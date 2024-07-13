
import cartImg from '../Images/user.png'
import searchImg from '../Images/search-normal.png'
import contactImg from '../Images/clarity_shopping-cart-outline-badged.png'
import { useNavigate } from 'react-router-dom';
import { PiSquaresFourDuotone } from "react-icons/pi";
import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  const navigate = useNavigate()

  const navigateHandler = ()=>{
    navigate('/cart')
  }
  return (
    <nav className={classes.nav}>
      <div className={classes['options-div']}>
        <PiSquaresFourDuotone className={classes.options} />
        <h3>Savvy</h3>
      </div>

      <div className={classes.link}>
        <a href="/products">Shop</a>
        <a href="/">About Us</a>
        <a href="/">Blog</a>
        <a href="/">Contact Us</a>
      </div>
      <div className={classes.icons}>
        <img onClick={navigateHandler} className={classes.icon} src={searchImg} alt="" />
        <img onClick={navigateHandler} className={classes.icon} src={contactImg} alt="" />
        <img onClick={navigateHandler} className={classes.icon} src={cartImg} alt="" />
        
      </div>
    </nav>
  );
};

export default Navigation;
