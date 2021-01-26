import React from "react";
// import logo from "../image/rick.png";
import { Link } from "react-router-dom";
import "../stylesheets/Landing.scss";
const Landing = () => {
  return (
    <div className="landing">
      <Link to="/Main">
        <button className="landing--button">Comienza la búsqueda</button>
      </Link>
    </div>
  );
};
export default Landing;
