import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import GetDataFromApi from "../services/GetDataFromApi";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import Header from "./Header";
import Footer from "./Footer";
import CharacterDetail from "./CharacterDetail";
import "../stylesheets/Main.scss";

const Main = () => {
  // states
  const [users, setUsers] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("all");
  const [filterGender, setFilterGender] = useState("");
  const [reset, setReset] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  // api
  useEffect(() => {
    setIsLogin(true);
    GetDataFromApi().then((data) => {
      setUsers(data);
      setIsLogin(false);
    });
  }, []);

  //   change states
  const handlerFilter = (data) => {
    if (data.name === "name") {
      setFilterName(data.value);
    } else if (data.name === "species") {
      setFilterSpecies(data.value);
    } else if (data.name === "gender") {
      setFilterGender(data.value);
    }
  };

  const allFilters = users
    .filter((user) => {
      return user.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((user) => {
      if (filterSpecies === "all") {
        return true;
      } else {
        return user.species === filterSpecies;
      }
    })
    .filter((user) => {
      if (filterGender === "") {
        return true;
      } else {
        return user.gender === filterGender;
      }
    });

  // reset

  // const handlerReset = () => {
  //   setReset({
  //     filterName = "",
  //     filterSpecies= "",
  //     filterGender="",

  //   });

  // render no me funciona
  const renderUserDetails = (props) => {
    const userId = parseInt(props.match.params.id);
    const foundUser = users.find((user) => {
      return user.id === userId;
    });
    const foundUserIndex = users.findIndex((user) => {
      return user.id === userId;
    });
    let nextUser = users[foundUserIndex + 1];
    if (nextUser === undefined) {
      nextUser = users[0];
    }

    if (foundUser !== undefined) {
      return <CharacterDetail user={foundUser} nextUser={nextUser} />;
    }
  };

  return (
    <div className="main">
      {isLogin === true ? <i className=" loading fas fa-spinner"></i> : ""}
      <Header />
      <Switch>
        <Route exact path="/Main">
          <Filters handlerFilter={handlerFilter} users={allFilters} />
          {/* handlerReset={handlerReset} */}
          <CharacterList users={allFilters} />
        </Route>
        <Route path="/Main/no-result">No filtro</Route>
        <Route path="/Main/Details/:id" render={renderUserDetails} />
      </Switch>
      <Footer />
    </div>
  );
};
export default Main;
