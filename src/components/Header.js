import React from "react";
import logo from "../image/rick.png";
import nave from "../image/nave.png";
import { Link } from "react-router-dom";
import "../stylesheets/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img className="header--nave" src={nave} alt="nave" />
      <Link to="/">
        <img className="header--logo" src={logo} alt="rick and morty" title="rick and morty" />
      </Link>
    </div>
  );
};
export default Header;
