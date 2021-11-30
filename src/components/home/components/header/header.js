import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../asserts/codesandbots logo.svg";
import { NavLink, useHistory } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { axioss } from "../../../api/api";

export default function Header({ dropdown, setdropdown }) {
  let h = useHistory();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 760) {
        var drop = document.getElementById("header_right");
        if (drop.className === "header_right content-mobile-header_right") {
          drop.className = "header_right";
        }
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const Logout = () => {
    axioss({ method: 'post', url: '/logout' }).then((res) => {
      localStorage.clear();
      h.push('/');
      window.location.reload();
    }).catch((Err) => {
      // console.log(Err);
    })
  }
  function OnClick() {
    var drop = document.getElementById("header_right");
    if (drop.className === "header_right") {
      drop.className += " content-mobile-header_right";
    } else {
      drop.className = "header_right";
    }
  }
  return (
    <header>
      <div
        className="logo image"
        style={{ backgroundImage: `url('${logo}')` }}
      ></div>
      <div
        className="image menu-logo"
        onClick={() => {
          OnClick();
        }}
      ></div>
      <div id="header_right" className="header_right">
        <div className="header_options">
          <NavLink
            onClick={() => window.location.reload()}
            to={"/home"}
            className="header_link header_none"
          >
            <h3>Home</h3>
          </NavLink>
          {localStorage.getItem("Token") ? <NavLink
            onClick={() => window.location.reload()}
            to={"/e-commerce"}
            className="header_link header_none"
          >
            <h3>Shop</h3>
          </NavLink>
            : null}
          <NavLink to="/learninschool" className="header_link header_none">
            <h3>Learn In School</h3>
          </NavLink>
        </div>
        <div className="header-buttons">
          <NavLink to={localStorage.getItem("Token") ? "/" : "/sign-in"} onClick={() => { if (localStorage.getItem("Token")) Logout(); }}>
            <div className="login header-btn">
              {localStorage.getItem("Token") ? "Logout" : "Log In"}              </div>
          </NavLink>
          {/* <NavLink to="/sign-up"><div className="header-btn">Sign Up</div></NavLink> */}
        </div>
      </div>
    </header >
  );
}
