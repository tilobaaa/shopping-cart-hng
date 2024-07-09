import Navigation from "./Navigation";
import classes from "./Header.module.css";
import Images from "./Images";

import imgObject from "../Assets/images";
import Footer from "./Footer";

const Header = () => {
  return (
    <div>
      <Navigation />
      <div className={classes.text}>
        <h2>Shop</h2>
        <p>HOME/SHOP</p>
      </div>
      <main className={classes.main}>
        <div className={classes["main-headers"]}>
          <p>Best Sellers</p>
          <p>New Arrivals</p>
          <p>Hot Sales</p>
        </div>
        <div className={classes.products}>
          {imgObject.map((image) => (
            <Images src={image.image} title={image.title} price={image.price} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Header;
