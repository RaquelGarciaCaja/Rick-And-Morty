import React from "react";
import CharacterCard from "./CharacterCard";
import "../stylesheets/CharacterList.scss";
import notFound from "../image/notFound.jpg";

const CharacterList = (props) => {
  const userMethod = props.users
    .sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .map((user) => {
      return (
        <li className="character" key={user.id}>
          <CharacterCard user={user} />
        </li>
      );
    });

  return (
    <div>
      {userMethod.length === 0 ? (
        <section className="notFound--fondoImg">
          <div className="notFound--containerImg">
            <h1 className="notFound">Anda, escribe algo que sea interesante</h1>
          </div>
          <div className="notFound--containerImg">
            <img className="notFound--img" src={notFound} alt="not found" />
          </div>
        </section>
      ) : (
        <ul className="characters">{userMethod}</ul>
      )}
    </div>
  );
};
export default CharacterList;
