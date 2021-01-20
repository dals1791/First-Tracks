import React from "react"
// React-Bootstrap Components ---------------------------
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