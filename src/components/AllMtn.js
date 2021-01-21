import React from "react"
// components
import SingleMtn from "./SingleMtn"
// React-Bootstrap Components ---------------------------
import Dropdown from "react-bootstrap/Dropdown"


const AllMtn = ({mtn, handleClick}) => {
    
    
    const mountainList  = mtn.map((ele)=> {
        
        return(
            <div key={ele.props.id}>  
                <div className="mtn-title"  
                onClick={()=>{handleClick(ele.props)}}>
                    <Dropdown.Item>{ele.props.name}</Dropdown.Item>
                </div>
            </div>
        )
    })
    return (
        <>
    
        <Dropdown className="mtn-dropdown">
            <Dropdown.Toggle variant="success" id="dropdown-basic" className="mtn-dropdown">
                    Mountains
            </Dropdown.Toggle>
            <Dropdown.Menu className="mtn-dropdown-list" id="mtn-list">
                {mountainList}
            </Dropdown.Menu>
        </Dropdown>
    
    
            </>
    )
    
}

export default AllMtn