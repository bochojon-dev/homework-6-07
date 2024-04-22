import React from "react";
import "../blog/Blog.css";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import arrow from "../../assets/images/arrow.svg";
const Blog = () => {
  const cards = [
    {
      id: 1,
      image: blog1,
      title: "Why you have to digitalize in 2021",
    },
    {
      id: 2,
      image: blog2,
      title: "Our internal process and longerm vision",
    },
    {
      id: 3,
      image: blog3,
      title: "Helping the next generation of leaders",
    },
  ];
  const card = cards?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.image} alt="naws" />
      <h3>{el.title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
        amet eros blandit, hendrerit elit et.
      </p>
      <button>
        Learn More <img src={arrow} alt="arrow" />
      </button>
    </div>
  ));
  return (
    <div className="blog">
      <div className="container">
        <div className="blog_contents">
          <h2>Latest Blog & News</h2>
          <div className="blog_cards">{card}</div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
