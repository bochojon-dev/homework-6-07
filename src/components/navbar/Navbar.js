import React from "react";
import "../navbar/Navbar.css";
import logo from "../../assets/images/Logo.svg";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  let { pathname } = useLocation();
  console.log(pathname);
  if (pathname.includes("/register")) {
    return <></>;
  }
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
      id: 3,
      page: "Services",
      link: "/service",
    },
    {
      id: 4,
      page: "Blog",
      link: "/blog",
    },
    {
      id: 5,
      page: "Contact Us",
      link: "/contact",
    },
    {
      id: 6,
      page: "Products",
      link: "/product",
    },
  ];
  const page = pages?.map((el) => (
    <li key={el.id}>
      <NavLink className={"nav_link"} to={el.link}>
        {el.page}
      </NavLink>
    </li>
  ));
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <NavLink to={"/about"}>
            <img src={logo} alt="logo" />
          </NavLink>
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
