import React from "react";
const Reset = (props) => {
  const handlerClick = () => {
    props.handlerReset();
  };
  return (
    <div>
      <input className="reset" type="button" value="Borrar" onClick={handlerClick} />
    </div>
  );
};
export default Reset;
