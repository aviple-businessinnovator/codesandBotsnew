import React, { useState, useEffect } from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../images/codesandbots logo.svg";
import { NavLink, useHistory } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import ava from "../images/avatar.svg";
import { axioss } from "../../../api/api";
export default function Header({ dropdown, setdropdown }) {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 760) {
        var drop = document.getElementById("header_right");
        if (drop.className === "header_right content-mobile-header_right") {
          drop.className = "header_right";
        }
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let h = useHistory();
  function OnClick() {
    var drop = document.getElementById("header_right");
    if (drop.className === "header_right") {
      drop.className += " content-mobile-header_right";
    } else {
      drop.className = "header_right";
    }
  }
  const Logout = () => {
    axioss({ method: "post", url: "/logout" })
      .then((res) => {
        localStorage.clear();
        h.push("/");
        window.location.reload();
      })
      .catch((Err) => {
        // console.log(Err);
      });
  };
  const [avatarDrop, setavatarDrop] = useState(false);
  return (
    <header className="content-header">
      <div
        className="header-logo image"
        style={{ backgroundImage: `url('${logo}')` }}
      ></div>
      {/* <div className="header-search-head">
            <input type="search" placeholder="What you want to do today? " />
            <SearchIcon className="search-icon" />
         </div> */}
      <div
        className="image header-menu-logo"
        onClick={() => {
          OnClick();
        }}
      ></div>
      <div id="header_right" className="header_right">
        <div className="header-header_options">
          <NavLink to={"/"} className="header-header_link header_none">
            <h3>Home</h3>
          </NavLink>
          {/* <a href="/" className="header-header_link" ><h3>My Classes</h3></a> */}
          <NavLink
            to={"/e-commerce"}
            className="header-header_link header_none"
          >
            <h3>Shop</h3>
          </NavLink>
        </div>
        <Avatar
          onClick={() => {
            setavatarDrop(!avatarDrop);
          }}
          className="header-head-avatar"
          src={ava}
        />
        {avatarDrop ? (
          <div className="header-avatar-dropdown">
            {localStorage.getItem("Token") ? (
              <NavLink to="/">
                <p>My Account</p>
              </NavLink>
            ) : (
              <NavLink to="/sign-in">
                <p>Login</p>
              </NavLink>
            )}
            {localStorage.getItem("Token") ? (
              <NavLink to="#">
                <p>My Class</p>
              </NavLink>
            ) : null}
            {localStorage.getItem("Token") ? (
              <NavLink
                to="/"
                onClick={() => {
                  Logout();
                }}
              >
                <p>Logout</p>
              </NavLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </header>
  );
}
