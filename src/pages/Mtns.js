import React, {useState} from "react"
import SingleMtn from "../components/SingleMtn"
import AllMtn from "../components/AllMtn"
import mtnData from "../data/mountainData.js"

const Mtns = (props) => {
    const [singleMtn, setSingleMtn]=useState(null)
    
    
    const displaySingleMtn = (id)=>{
        // console.log("display single mtn handleCLick works")
        const singleMtnData = mtnData?.map((ele, index)=>{
            return (
                <SingleMtn
                {...ele}
                key={index}
                />
                )
        })
        setSingleMtn(singleMtnData[id])
    }
    console.log("This is single mt state", singleMtn)

    return(
        <>
        <AllMtn mtn={mtnData} handleClick={displaySingleMtn}/>
       <SingleMtn data={singleMtn}/>
        </>
    )
}
export default Mtns