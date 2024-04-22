import React from "react";
import "../navbar/Navbar.css";
import logo from "../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const pages = [
    {
      id: 1,
      page: "About Us",
      link: "/about",
    },
    {
      id: 2,
      page: "Career ",
      link: "/career",
    },
    {
      id: 1,
      page: "Services",
      link: "/service",
    },
    {
      id: 1,
      page: "Blog",
      link: "/blogpage",
    },
    {
      id: 1,
      page: "Contact Us",
      link: "/contact",
    },
  ];
  const page = pages?.map((el) => (
    <li key={el.id}>
      <NavLink to={el.link}>{el.page}</NavLink>
    </li>
  ));
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <img src={logo} alt="logo" />
          <div className="items">
            <ul>{page}</ul>
            <button>Clone Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
