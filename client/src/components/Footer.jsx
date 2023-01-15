import React from "react";
import { FaFacebook, FaInstagram, FaYelp, FaEnvelope } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container text-center">
      <div className="row socials">
        <div>
          <a
            className="icon"
            href="https://www.facebook.com/BballersHoopsRoswell/"
          >
            <FaFacebook />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/bballershoopsroswell/"
          >
            <FaInstagram />
          </a>
          <a
            className="icon"
            href="https://www.yelp.com/biz/b-ballers-hoops-roswell-roswell"
          >
            <FaYelp />
          </a>
          <a className="icon" href="mailto:bballershoopsroswell@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <div className="copyright">
          {year} &copy; BBallers Hoops School. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
