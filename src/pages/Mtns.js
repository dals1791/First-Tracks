import React, {useState} from "react"
import SingleMtn from "../components/SingleMtn"
import AllMtn from "../components/AllMtn"
import mtnData from "../data/mountainData.js"

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
        <>
        <AllMtn mtn={mtnData} handleClick={displaySingleMtn}/>
       <SingleMtn data={singleMtn}/>
        </>
    )
}
export default Mtns