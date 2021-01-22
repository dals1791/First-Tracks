// Import React Libraries--------------------------------------
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
// Import Styles--------------------------------------
import "./App.css";
import "./fontawesome.css";
// Import Components--------------------------------------
import Home from "./pages/Home";
import Mtns from "./pages/Mtns";
import About from "./pages/About";
import Nav from "./components/Nav";
// Import React-Bootstrap----------------------------------
import "bootstrap/dist/css/bootstrap.min.css";
// Main App-------------------------------------------------

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleFavorites = (data) => {
    const addFavorites = favorites.slice();
    const idMatch = favorites.some((mtn) => mtn.id === data.id);
    if (idMatch === true) {
      const index = addFavorites.indexOf(data);
      addFavorites.splice(index, 1);
      setFavorites(addFavorites);
    } else {
      // iconColor = "red"
      addFavorites.push(data);
      setFavorites(addFavorites);
    }
  };
  console.log("This is my favorites", favorites);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  return (
    <>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home favorites={favorites} storageFavorites={setFavorites} handleFavorites={handleFavorites} />
          </Route>
          <Route path="/Mtns">
            <Mtns favorites={favorites} handleFavorites={handleFavorites} />
          </Route>
          <Route path="/About">
            <About />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
