// import React
import React from "react"
import {Link} from "react-router-dom"

const NavLinks = (props) => {
return(
    <div className="nav-links"> 
        <Link onClick={()=>{props.toggle()}} className="Link" to="/">Home</Link>
        <Link  onClick={()=>{props.toggle()}} className="Link"to="/Mtns">Mountains</Link>
        <Link  onClick={()=>{props.toggle()}} className="Link" to="/About">About</Link>
    </div>
)

}
export default NavLinks