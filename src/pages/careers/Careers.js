import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";
import career from "../../assets/images/career.png";
import "../careers/Careers.css";

const Careers = () => {
  const items = [
    {
      id: 1,
      number: "15+",
      title: "Awards received",
    },
    {
      id: 2,
      number: "500+",
      title: " Clients served",
    },
    {
      id: 3,
      number: "34",
      title: " Employees",
    },
    {
      id: 4,
      number: "130+",
      title: "Custom solutions",
    },
  ];
  const energy = items?.map((e) => (
    <div key={e.id} className="energy_item">
      <h2>{e.number}</h2>
      <h3>{e.title}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet
        eros elit et.
      </p>
    </div>
  ));
  return (
    <div className="careers">
      <div className="container">
        {Navbar}
        <div className="career_contents">
          <div className="career_texts">
            <h3>
              We value human, organizational, and operational intelligence, not
              just artificial
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              leo odio, sagittis quis ornare quis.
            </p>
            <button>Work With Us</button>
          </div>
          <img src={career} alt="career" />
        </div>
        <div className="energy">
          <div className="energy_title">
            <h4>
              The energy of a start-up combined with 30 years of experience
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus
              commodo suscipit tellus et pellentesque.
            </p>
          </div>
          <div className="energy_items">{energy}</div>
        </div>
        {Blog}
        {Footer}
      </div>
    </div>
  );
};

export default Careers;
