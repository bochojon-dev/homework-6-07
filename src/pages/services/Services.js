import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";
import service from "../../assets/images/service.png";
const Services = () => {
  return (
    <div className="services">
      <div className="container">
        {Navbar}
        <div className="career_contents">
          <div className="career_texts">
            <h3>We serve clients with ground breaking solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              leo odio, sagittis quis ornare quis.
            </p>
            <button>Work With Us</button>
          </div>
          <img src={service} alt="service" />
        </div>
        {Blog}
        {Footer}
      </div>
    </div>
  );
};

export default Services;
