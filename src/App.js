// Import React Libraries--------------------------------------
import React from "react"
import {Switch, Route} from "react-router-dom"
// Import Styles--------------------------------------
import './App.css';
// Import Components--------------------------------------
import Home from "./pages/Home"
import Mtns from "./pages/Mtns"
import About from "./pages/About"
import Nav from "./components/Nav"
// Main App-------------------------------------------------

function App() {
  

return (
  <>
    <div>
    <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Mtns">
          <Mtns />
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
