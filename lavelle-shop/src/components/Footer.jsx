import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="left-footer">
        <h1 className="logo-footer">Lavelle Shop</h1>
        <p className="desc-footer">
          We are a quality cosmetics store specializing in eyebrows and eyelashes, with the purpose of providing a better image to our customers. We have lipsticks, eyeshadow palettes, mascara and other makeup products.
        </p>
        <div className="socialContainer-footer">
          <div className="socialIcon-footer" color="3B5999">
            <Facebook />
          </div>
          <div className="socialIcon-footer" color="E4405F">
            <Instagram />
          </div>
          <div className="socialIcon-footer" color="55ACEE">
            <Twitter />
          </div>
          <div className="socialIcon-footer" color="E60023">
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="center-footer">
        <h3 className="title-footer">Useful Links</h3>
        <ul className="list-footer">
          <li className="listItem-footer">Home</li>
          <li className="listItem-footer">Cart</li>
          <li className="listItem-footer">New Products</li>
          <li className="listItem-footer">Makeup Fashion</li>
          <li className="listItem-footer">Accesories</li>
          <li className="listItem-footer">My Account</li>
          <li className="listItem-footer">Order Tracking</li>
          <li className="listItem-footer">Wishlist</li>
          <li className="listItem-footer">Wishlist</li>
          <li className="listItem-footer">Terms</li>
        </ul>
      </div>
      <div className="right-footer">
        <h3 className="title-footer">Contact</h3>
        <div className="contactItem-footer">
          <RoomIcon style={{ marginRight: "10px" }} /> Dominican Republic, San Cristobal 91000
        </div>
        <div className="contactItem-footer">
          <PhoneIcon style={{ marginRight: "10px" }} /> +1 829 688 9895
        </div>
        <div className="contactItem-footer">
          <MailOutlineIcon style={{ marginRight: "10px" }} />{" "}
          info@lavelleshop.net
        </div>
        <img className="payment-footer" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="foto pago" />
      </div>
    </div>
  );
};

export default Footer;
