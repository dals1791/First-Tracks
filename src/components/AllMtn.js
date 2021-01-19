import React from "react"
// React-Bootstrap Components ---------------------------
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Dropdown from "react-bootstrap/Dropdown"


const AllMtn = (props) => {
    const mountainList  = props.mtn.map((ele)=> {
        
        return(
            <div key={ele.id}>  
                <div className="mtn-title"  
                onClick={()=>{props.handleClick(ele.id)}}>
                    {/* {ele.name} */}
                    <Dropdown.Item>{ele.name}</Dropdown.Item>
                </div>
            </div>
        )
    })
    return (
        <>
    <Container className="all-mtns">
        <Dropdown className="mtn-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="mtn-dropdown">
                    Mountains
            </Dropdown.Toggle>

            <Dropdown.Menu className="mtn-dropdown">
                {mountainList}
            </Dropdown.Menu>
        </Dropdown>
    
    </Container>
    
            </>
    )
    
}

export default AllMtn