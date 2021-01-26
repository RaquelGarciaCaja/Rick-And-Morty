import React from "react";
import "../stylesheets/Filters.scss";
import PropTypes from "prop-types";

const FilterName = (props) => {
  const handlerFilterName = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    props.handlerFilter({ value: inputValue, name: inputName });
  };

  const handlerPreventDefault = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="filter--name" onSubmit={handlerPreventDefault}>
      <label className="name">Nombre:</label>
      <input
        className="filter--name--input"
        type="text"
        placeholder="Ej: Rick"
        name="name"
        onChange={handlerFilterName}
      />
    </form>
  );
};
export default FilterName;
FilterName.propTypes = {
  label: PropTypes.string,
};
