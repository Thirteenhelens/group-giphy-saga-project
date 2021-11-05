import "./App.css";
import React from "react";
import GiphyList from "../GiphyList/GiphyList";
import GiphyForm from "../GiphyForm/GiphyForm";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import FavoriteList from "../FavoriteList/FavoriteList";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="searchHeaderContainer">
        <h1>
          <Link className="link" to="/">
            <span className="blue">G</span>
            <span className="red">i</span>
            <span className="yellow">i</span>
            <span className="blue">p</span>
            <span className="green">h</span>
            <span className="red">y</span>
          </Link>
        </h1>

        <Route exact path="/">
          <GiphyForm />
          <GiphyList />
        </Route>
      </div>

      <div>
        <Route path="/favorites">
          <FavoriteList />
          <FavoriteItem />
        </Route>
      </div>
    </Router>
  );
}

export default App;
