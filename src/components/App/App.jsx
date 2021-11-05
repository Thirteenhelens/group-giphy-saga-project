import React from "react";
import GiphyItem from "../GiphyItem/GiphyItem";
import GiphyList from "../GiphyList/GiphyList";
import GiphyForm from "../GiphyForm/GiphyForm";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import FavoriteList from "../FavoriteList/FavoriteList";
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div>
        <h1>Giiphy?</h1>

        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/favorites">Fav Gifs!</Link>

        <Route exact path="/">
          <GiphyForm />
          <GiphyList />
       
        </Route>

        <Route path="/favorites">
          <FavoriteList />
          <FavoriteItem />
        </Route>
        
      </div>
    </Router>
  );
}

export default App;
