import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "../products/Products.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import contact from "../../assets/images/contact.png";
import arrow from "../../assets/images/arrow.svg";
import jonson from "../../assets/images/jonson.svg";

const Products = () => {
  const { id } = useParams();
  console.log(id);
  const url = "https://dummyjson.com/products";
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
    // .finally()
  }, []);
  const cards = data?.map((el) => (
    <div key={el.id} className="post_card">
      <Link to={`/product/${el.id}`}>
        <img className="post_img" src={el.images[0]} alt="news" />
      </Link>
      <div className="post_texts">
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
    <div className="products">
      <div className="container">
        <div className="product_contents">
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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The Maker is a decentralized. We aim to attain the
              </p>
              <button id="button">
                Read More
                <img src={arrow} alt="arrow" />
              </button>
            </div>
            <img src={contact} alt="contact" />
          </div>
          <div className="posts">
            <div className="post_page">
              <h2>All Posts</h2>
              <div className="post_cards">{cards}</div>
            </div>
          </div>
          {Footer}
        </div>
      </div>
    </div>
  );
};

export default Products;
