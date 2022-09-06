import React, { useState } from "react";
import "./ContactList.css";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Contact = (item) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = (e) => {
    setToggle(!toggle);
    const list = [];
    if (!toggle) {
      console.log(e);
      list.push(e);
      localStorage.setItem("list", JSON.stringify(list));
    }
    if (toggle) {
      list.shift(e);
      localStorage.setItem("list", JSON.stringify(list));
    }
  };

  return (
    <div>
      <div className="contact-wrapper">
        <img className="contact-img" alt="img" src={item.image} />
        <div className="contact-info">
          <h1 className="contact-title">
            <b>
              {" "}
              {item.firstName} {item.lastName}
            </b>
          </h1>

          <FaHeart
            onClick={() => handleToggle(item)}
            className={toggle ? "red__like" : "white__like"}
            alt="like"
          />
        </div>
        <div className="contact-details">
          <ul className="details-list">
            <li className="adress li">
              {item.city} city, {item.country}
            </li>
            <li className="phone li">{item.phoneNumber}</li>
            <li className="site li">{item.website}</li>
            <li className="email li">{item.email}</li>
          </ul>
          <Link to={`/item/${item.id}`}>
            <button className="contact-button">Show</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
