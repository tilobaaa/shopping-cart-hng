import HomeImg from "./Images/homePNG.png";
import { Link, useNavigate } from "react-router-dom";
import frontImg from "./Images/frontImg.png";
import backImg from "./Images/backimg.png";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import classes from "./Home.module.css";
import { FaArrowRight } from "react-icons/fa";
import hande from './Images/hande.png'
import pray2 from './Images/pray2.png'
import pray3 from './Images/pray3.png'

const Home = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <div>
      <Navigation />
      <div className={classes.home}>
        <img src={HomeImg} alt="" />
        <div className={classes["home-div"]}>
          <h4>Discover Your Unique Style</h4>
          <p>
            Explore our latest collection of elegant and trendy fashion for
            every occasion.
          </p>
          <button onClick={navigateHandler}>Shop Now</button>
        </div>
      </div>
      <div className={classes["everything-else"]}>
        <div className={classes.main}>
          <div className={classes.details}>
            <h1>DISCOVER THE LATEST TRENDS</h1>
            <p>Fresh styles for every season. Shop our most loved items</p>
            <Link to="/products">
              EXPLORE <FaArrowRight />
            </Link>
          </div>
          <div className={classes["image-div"]}>
            <img className={classes.back} src={backImg} alt="" />
            <img className={classes.front} src={frontImg} alt="" />
          </div>
        </div>
        <main className={classes["main-guys"]}>
          <h2>Explore Our Collections</h2>
          <div className={classes["img-group"]}>
            <div>
              <img src={hande} alt="" />
              <p>Health & Beauty</p>
            </div>
            <div>
              <img src={pray2} alt="" />
              <p>Accesories</p>
            </div>
            <div>
              <img src={pray3} alt="" />
              <p>Footwears</p>
            </div>
          </div>
        </main>
        <div className={classes.footer}>
          <h4>Stay Updated</h4>
          <p>Get the Latest news and exclusive offers</p>
          <div className={classes['input-div']}>
            <input type="text" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
