// Import React Libraries--------------------------------------
import React, {useState} from "react"
import {Link} from "react-router-dom"
// import React-Bootsrrap
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Navbar from "react-bootstrap/Navbar"
// import Font Awesome Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
// import components
import NavLinks from "./NavLinks"

const Nav = () => {
    const [toggle, setToggle] =useState(false)

    const handleClick = () =>{
         setToggle(toggle =>!toggle)   
    }


    return(
        <>
        <Container >
            <Row className="nav-bar">
                <Col xs={2}>
                <FontAwesomeIcon 
                className="hamburger-icon" 
                size="2x" 
                icon={faSnowflake}
                onClick={handleClick}/>
                </Col>
                <Col xs={10}>
                    <Link to="/" className="title"><h1>First Tracks</h1></Link>
                </Col>
            </Row>
            
            
        </Container>
        {toggle ? <NavLinks toggle={handleClick}/> : null}
        </>
    )
}
export default Nav

// add in heart icon to follow mtns and home page. toggle to tre/false  to rnder un-render
//make seperate branch for post mvp changes
//joe-codepen for map
// local storage to save data, maybe have to turn to string. json.stringfy