import React from "react";
import { Switch, Route } from "react-router-dom";
import "../stylesheets/App.scss";
import Landing from "./Landing";
import Main from "./Main";

const App = () => {
  return (
    <section className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Main" component={Main} />
      </Switch>
    </section>
  );
};
export default App;
