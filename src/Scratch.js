import React from "react"
import Dropdown from 'react-bootstrap/Dropdown'
import mountainData from "./data/mountainData"

const Dropdownone = (props)=>{
    const map = mountainData.map((ele)=>{
        return(
            <>
            {ele.name}
            </>
        )

    })

return(
<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">{map[0]}</Dropdown.Item>
    <Dropdown.Item href="#/action-2">A{map[1]}</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
)
}
export default Dropdownone