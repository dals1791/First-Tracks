// Import React Libraries--------------------------------------
import React from "react"
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';

const Nav = () => {
    return(
        <Container>
            <h1 className="title">First Tracks</h1>
        <div className="nav-bar"> 
            <Link  className="Link" to="/">Home</Link>
            <Link  className="Link"to="/Mtns">Mountains</Link>
            <Link  className="Link" to="/About">About</Link>
        </div>  
        </Container>
    )
}
export default Nav