import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterCard.scss";

const CharacterCard = (props) => {
  const speciesType = () => {
    if (props.user.species === "Human") {
      return <i className="character--species fas fa-user"></i>;
    } else if (props.user.species === "Alien") {
      return <i className="character--species fab fa-reddit-alien"></i>;
    }
  };

  return (
    <section className="character--details character--main  ">
      <Link className="textDecoration--none" to={`/Main/Details/${props.user.id}`}>
        <div className="chracter--details--detail">
          <h3 className="character--title">{props.user.name}</h3>

          <p className="character--species">{speciesType()}</p>
        </div>
        <div className="character--conainer__img">
          <img
            className="character--img"
            src={props.user.img}
            alt={props.user.name}
            title={props.user.name}
          />
        </div>
      </Link>
    </section>
  );
};
export default CharacterCard;
