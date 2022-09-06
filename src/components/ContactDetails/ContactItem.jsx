import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import ContactForm from "./ContactForm";
import "./FormAndItem.css";
const ContactItem = () => {
  const state = useSelector((state) => state);
  const { id } = useParams();
  return state.data
    .filter((item) => item.id === +id)
    .map((item) => (
      <div>
        <Header />

        <div className="item-wrapper">
          <img src={item.image} className="item-img" alt="img" />
          <ContactForm />
        </div>
      </div>
    ));
};

export default ContactItem;
