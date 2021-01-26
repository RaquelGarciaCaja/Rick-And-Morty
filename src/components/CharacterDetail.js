import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/CharacterDetails.scss";

const CharacterDetail = (props) => {
  // inconos alive
  const statusType = () => {
    if (props.user.status === "Dead") {
      return <i className="details--icons fas fa-dizzy"></i>;
    } else if (props.user.status === "Alive") {
      return <i className="details--icons fas fa-heart"></i>;
    } else if (props.user.status === "unknown") {
      return <i className="details--icons fas fa-question"></i>;
    }
  };
  // origin
  const originType = () => {
    if (props.user.origin.name !== "unknown") {
      return <p>{props.user.origin.name}</p>;
    } else {
      return <i className="details--icons fas fa-question"></i>;
    }
  };

  // iconos especie
  const speciesType = () => {
    if (props.user.species === "Human") {
      return <i className=" details--icons fas fa-user"></i>;
    } else if (props.user.species === "Alien") {
      return <i className="details--icons fab fa-reddit-alien"></i>;
    }
  };

  return (
    <section className="details ">
      <Link to="/Main" className="atras">
        <i className="far fa-times-circle"></i>
      </Link>
      <div className="details--arrows">
        <i
          onClick={() => window.history.back()}
          className=" details--arrows__arrow fas fa-arrow-left"
        ></i>

        <Link to={`/Main/Details/${props.nextUser.id}`}>
          <i className=" details--arrows__arrow fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className="details--titleAll">
        <h3 className="details--title">{props.user.name}</h3>
      </div>
      <section className="details--content">
        <div className="details--container">
          <img
            className="details--container__img"
            src={props.user.img}
            alt={props.user.name}
            title={props.user.name}
          />
        </div>
        <div className="details--props">
          <div className="details--propsText">
            <p className="details--text">Planeta:{originType()}</p>
            <p className="details--text">Número de episodios:{props.user.episode.length}</p>
            <p className="details--text">Estado:{statusType()}</p>
            <p className="details--text">Especie:{speciesType()}</p>
          </div>
        </div>
      </section>
    </section>
  );
};
export default CharacterDetail;
