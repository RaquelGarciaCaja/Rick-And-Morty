import React from "react";
const FilterLocation = (props) => {
  const handlerFilterLocation = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    props.handlerFilter({
      name: inputName,
      value: inputValue,
    });
  };

  return (
    <form className="filter--gender">
      <label className="filter--gender--label" htmlFor="">
        Género:{" "}
      </label>
      <div className="filter--gender--radio">
        <input
          type="radio"
          className="filter--gender--input"
          name="gender"
          value="unknown"
          onChange={handlerFilterLocation}
        />
        No se sabe
        <input
          type="radio"
          className="filter--gender--input"
          name="gender"
          value="Female"
          onChange={handlerFilterLocation}
        />
        Mujer
        <input
          type="radio"
          className="filter--gender--input"
          name="gender"
          value="Male"
          onChange={handlerFilterLocation}
        />
        Hombre
      </div>
    </form>
  );
};
export default FilterLocation;
