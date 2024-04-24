import React from "react";
import "../footer/Footer.css";
import footerLogo from "../../assets/images/logo2.svg";
import facebook from "../../assets/images/facebook.svg";
import youtube from "../../assets/images/youtube.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import left from "../../assets/images/left.png";
import right from "../../assets/images/right.png";
import { useLocation } from "react-router-dom";
const Footer = () => {
  let { pathname } = useLocation();
  // console.log(pathname);
  if (
    !pathname.includes("/about") ||
    pathname.includes("/career") ||
    pathname.includes("/service") ||
    pathname.includes("/blog") ||
    pathname.includes("/contact") ||
    pathname.includes("/product") ||
    pathname.includes("single-route")
  ) {
    return <></>;
  }
  return (
    <div className="footer">
      <div className="container">
        <div className="foooter_contents">
          <div className="footer_items">
            <ul>
              <li>
                <img src={footerLogo} alt="logo" />
              </li>
              <li>
                <h3>Bespoke software solutions</h3>
              </li>
              <li>
                <div className="footer_icons">
                  <img src={facebook} alt="social media" />
                  <img src={youtube} alt="social media" />
                  <img src={instagram} alt="social media" />
                  <img src={twitter} alt="social media" />
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <h4>Company</h4>
              </li>
              <li>
                {/* <a href=""></a> */}
                Company
              </li>
              <li>
                {/* <a href=""></a> */}
                Careers
              </li>
              <li>
                {/* <a href=""></a> */}
                Services
              </li>
              <li>
                {/* <a href=""></a> */}
                Blog
              </li>
            </ul>
            <ul>
              <li>
                <h4>Connect</h4>
              </li>
              <li>hi@finsweet.com</li>
              <li>+(123) 456-7890</li>
            </ul>
            <ul>
              <li>
                <h4>Join Newsletter</h4>
              </li>
              <li>
                <input type="text" placeholder="Type email here" />
              </li>
              <li>
                <button>Subscribe</button>
              </li>
            </ul>
          </div>
          <div className="privacy">
            <p>© All rights reserved – Finsweet</p>
            <p>Privacy Policy Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={right} alt="shape right" />
      </div>
      <div className="left">
        <img src={left} alt="shape left" />
      </div>
    </div>
  );
};

export default Footer;
