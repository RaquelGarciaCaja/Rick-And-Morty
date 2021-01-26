import React from "react";
import "../stylesheets/Filters.scss";
import PropTypes from "prop-types";

const FilterSpecie = (props) => {
  const handlerFilterSpecies = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    props.handlerFilter({ value: inputValue, name: inputName });
  };

  return (
    <form className="filter--species">
      <label className="name">Especie:</label>
      <select
        name="species"
        className="filter--species--input"
        value={props.data.species}
        onChange={handlerFilterSpecies}
      >
        <option className="species--input" type="text" value="all" name="species">
          Todos
        </option>
        <option type="text" value="Alien" name="species">
          Alien
        </option>
        <option className="species--input" type="text" value="Human" name="species">
          Humano
        </option>
      </select>
    </form>
  );
};
export default FilterSpecie;
FilterSpecie.propTypes = {
  label: PropTypes.string,
};
