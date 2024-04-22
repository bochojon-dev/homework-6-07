import React from "react";
import "../navbar/Navbar.css";
import logo from "../../assets/images/Logo.svg";
const Navbar = () => {
  const pages = ["About Us", "Career", "Services", "Blog", "Contact Us"];
  const page = pages?.map((e, i) => <li key={i}>{e}</li>);
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
