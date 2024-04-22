import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";

const Blogpage = () => {
  return (
    <div className="blogpage">
      <div className="container">
        {Navbar}
        {Blog}
        {Footer}
      </div>
    </div>
  );
};

export default Blogpage;
