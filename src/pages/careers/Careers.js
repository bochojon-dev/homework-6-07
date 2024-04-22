import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";

const Careers = () => {
  return (
    <div className="careers">
      <div className="conteiner">
        {Navbar}
        {Blog}
        {Footer}
      </div>
    </div>
  );
};

export default Careers;
