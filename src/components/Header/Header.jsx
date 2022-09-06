import React from "react";
import { useNavigate } from "react-router-dom";
import image from "./../../images/Vector.svg";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const nav = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <img src={image} alt="logo"></img>
        <h1 className="header-title" onClick={nav}>
          MyContacts
        </h1>
      </div>
    </div>
  );
};

export default Header;
