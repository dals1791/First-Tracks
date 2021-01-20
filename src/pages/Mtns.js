import React, {useState} from "react"
import SingleMtn from "../components/SingleMtn"
import AllMtn from "../components/AllMtn"
import mtnData from "../data/mountainData.js"
// React-Bootstrap Components ---------------------------
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Dropdown from "react-bootstrap/Dropdown"

const Mtns = (props) => {
    
    const [singleMtn, setSingleMtn]=useState(null)
    
    
    const displaySingleMtn = (id)=>{
        
        const singleMtnData = mtnData?.map((ele)=>{
            return (
                <SingleMtn {...ele}/>

                )
        })
        
        const arrIndex =singleMtnData.findIndex((ele)=>ele.props.id===id)
        setSingleMtn(singleMtnData[arrIndex])
    
    }

    return(
        
        <Container className="mountain-list">
            <div className="all-mtn">
                <AllMtn mtn={mtnData} handleClick={displaySingleMtn}/>
            </div>
            
            <Container className="single-mtn">
                <SingleMtn data={singleMtn} addData={props.add}/>
            </Container>
        </Container>
    )
}
export default Mtns