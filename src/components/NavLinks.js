// import React
import React from "react"
import {Link} from "react-router-dom"
// import React-Bootsrrap
import Container from 'react-bootstrap/Container';

const NavLinks = (props) => {
return(
    <Container className="nav-links"> 
        <Link  onClick={()=>{props.toggle()}} className="Link" to="/">Home</Link>
        <Link  onClick={()=>{props.toggle()}} className="Link"to="/Mtns">Mountains</Link>
        <Link  onClick={()=>{props.toggle()}} className="Link" to="/About">About</Link>
    </Container>
)

}
export default NavLinks