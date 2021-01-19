// Import React Libraries--------------------------------------
import React from "react"
import {Link} from "react-router-dom"

const Nav = () => {
    return(
        <div className="nav-bar"> 
            <Link to="/">Home</Link>
            <Link to="/Mtns">Mountains</Link>
            <Link to="/About">About</Link>
        </div>
    )
}
export default Nav