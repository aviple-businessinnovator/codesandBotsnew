import React from "react";
import "./Footer.css";
import logo from "../images/codesandbots_logo.svg";
import footerImage from "../images/footer_image.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_left">
          <div
            className="footer_logo"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
          <p>A Company of AVIPL</p>
          <div className="address foot-email">CONTACT US</div>
          <div className="address">
            {" "}
            Plot No.19, G1-Block, South City -II, Gurugram Haryana India{" "}
          </div>
          <div className="address foot-email">
            Email: e-businessinnovator@avipl.in
          </div>
        </div>
        <div className="footer_mid">
          <div className="footer_options">
            <NavLink
              to={localStorage.getItem("Token") ? "/home" : "/sign-in"}
              className="footer_option"
            >
              Home
            </NavLink>
            {/* <NavLink to="/" className="footer_option">About</NavLink> */}
            <NavLink to="/learninschool" className="footer_option">
              Learn In School
            </NavLink>
          </div>
          <div className="footer_socialmedia_icons">
            <div className="footer_socialmedia_icon">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </div>
            <div className="footer_socialmedia_icon">
              <i class="fa fa-youtube-play" aria-hidden="true"></i>
            </div>
            <div className="footer_socialmedia_icon">
              <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            </div>
            <div className="footer_socialmedia_icon">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </div>
            <div className="footer_socialmedia_icon">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div className="footer_right">
          <img src={footerImage} alt="" />
        </div>
      </div>
    </>
  );
}

export default Footer;
