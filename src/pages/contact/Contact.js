import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";
import contact from "../../assets/images/contact.png";
import arrow from "../../assets/images/arrow.svg";
import jonson from "../../assets/images/jonson.svg";
import "../contact/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        {Navbar}
        <div className="career_contents">
          <div className="career_texts">
            <div id="date">
              <div id="Name">
                <img src={jonson} alt="user" />
                <p id="jon">Andrew Jonson</p>
              </div>
              <p id="par">Posted on 27th January 2021</p>
            </div>
            <h3>Our internal process and longerm vision</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              Maker is a decentralized. We aim to attain the
            </p>
            <button id="button">
              Read More
              <img src={arrow} alt="arrow" />
            </button>
          </div>
          <img src={contact} alt="contact" />
        </div>
        {Blog}
        {Footer}
      </div>
    </div>
  );
};

export default Contact;
