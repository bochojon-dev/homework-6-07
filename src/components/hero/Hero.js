import React from "react";
import "../hero/Hero.css";
import ipsum1 from "../../assets/images/ipsum1.svg";
import ipsum2 from "../../assets/images/ipsum2.svg";
import ipsum3 from "../../assets/images/ipsum3.svg";
import heroImage from "../../assets/images/heroImage.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_contents">
          <div className="hero_texts">
            <h3>Prosper with our bespoke solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique
            </p>
            <div className="services">
              <button>See Our Services</button>
              <button className="btn">See All Services</button>
            </div>
            <h4>Worked with 100+ Companies</h4>

            <div className="hero_icons">
              <img src={ipsum1} alt="logoipsum" />
              <img src={ipsum2} alt="logoipsum" />
              <img src={ipsum3} alt="logoipsum" />
            </div>
          </div>
          <img src={heroImage} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
