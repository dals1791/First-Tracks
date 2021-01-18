import React from "react"
import SingleMtn from "../components/SingleMtn"
import mtnData from "../data/mountainData.js"

const Mtns = () => {

    const mountainList  = mtnData.map((ele, index)=> {
        return(
            <>
            <div key={index}>{ele.name}</div>
            
            </>
        )
    })

    return(
        <>
        <div> {mountainList}</div>
        <SingleMtn mtn={mtnData}/>
        </>
    )
}
export default Mtns