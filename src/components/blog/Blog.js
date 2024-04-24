import React from "react";
import "../blog/Blog.css";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import arrow from "../../assets/images/arrow.svg";
import { useLocation } from "react-router-dom";
const Blog = () => {
  let { pathname } = useLocation();
  console.log(pathname);
  if (
    !pathname.includes("/about") ||
    pathname.includes("/career") ||
    pathname.includes("/service") ||
    pathname.includes("/blog") ||
    pathname.includes("/contact") ||
    pathname.includes("/product")
  ) {
    return <></>;
  }
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
    <div key={el.id} className="blog_card">
      <img src={el.image} alt="naws" />
      <div className="blog_texts">
        <h3>{el.title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit
          amet eros blandit, hendrerit elit et.
        </p>
        <button>
          Learn More <img src={arrow} alt="arrow" />
        </button>
      </div>
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
