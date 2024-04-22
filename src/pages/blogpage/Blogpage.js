import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";
import blogpage from "../../assets/images/blogpage.png";
const Blogpage = () => {
  return (
    <div className="blogpage">
      <div className="container">
        <div className="services">
          {Navbar}
          <div className="career_contents">
            <div className="career_texts">
              <h3>
                We hired people who are very passionate about what they do
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                leo odio, sagittis quis ornare quis.
              </p>
              <button>Work With Us</button>
            </div>
            <img src={blogpage} alt="blogpage" />
          </div>
          {Blog}
          {Footer}
        </div>
        {Blog}
        {Footer}
      </div>
    </div>
  );
};

export default Blogpage;
