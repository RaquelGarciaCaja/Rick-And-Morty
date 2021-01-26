import React from "react";
import FilterSpecie from "./FilterSpecie";
import FilterName from "./FilterName";
import FilterLocation from "./FilterLocation";
import Reset from "./Reset";
const Filters = (props) => {
  return (
    <div className="filter">
      <FilterName handlerFilter={props.handlerFilter} />
      <FilterSpecie handlerFilter={props.handlerFilter} data={props.users} />
      <FilterLocation handlerFilter={props.handlerFilter} />
      {/* <Reset handlerReset={props.handlerReset} /> */}
    </div>
  );
};
export default Filters;
