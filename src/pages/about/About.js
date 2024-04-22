import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";

const About = () => {
  return (
    <div className="about">
      {Navbar}
      {Hero}
      {Blog}
      {Footer}
    </div>
  );
};

export default About;
