import classes from "./Footer.module.css";
import { FaRegEnvelope } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footers}>
      <div className={classes.savvy}>
        <h2>Savvy</h2>
        <p>Where style Meets Elegance</p>
      </div>
      <div className={classes["contact-info"]}>
        <div className={classes.contact}>
          <FaRegEnvelope /> <p>info@savvy.com</p>
        </div>
        <div className={classes.contact}>
          <MdPhone /> <p>+234 123 5678 984</p>
        </div>
        <div className={classes.contact}>
          <IoLocationOutline />{" "}
          <p>BL 12345, 123 Sunshine Avenue, Lagos, Nigeria</p>
        </div>
      </div>

      <div className={classes["footer-lines"]}>
        <ul>
          <h6>Who We are</h6>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Terms of Service</li>
        </ul>
        <ul>
          <h6>Shop</h6>
          <li>BestSellers</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
        <ul>
          <h6>Support</h6>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
        <ul>
          <h6>Info</h6>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>
      <hr />
      </div>
     
      
      <div className={classes["social-media"]}>
        <p>Copyright © 2022. All rights reserved.</p>
        <div className={classes.icons}>
          <div>
            <FaYoutube />
          </div>
          <div>
            <FaInstagram />
          </div>
          <div>
            <FaFacebookF />
          </div>
          <div>
            {" "}
            <FaTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
