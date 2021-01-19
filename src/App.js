// Import React Libraries--------------------------------------
import React, {useState} from "react"
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
const [myMtns, setMyMtns]= useState([])
const addToHome =(data, weather)=>{
  setMyMtns([...myMtns, {data, weather}])

}

return (
  <>
    <div>
    <Nav />
      <Switch>
        <Route exact path="/">
          <Home followed={myMtns}/>
        </Route>
        <Route path="/Mtns">
          <Mtns add={addToHome}/>
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
