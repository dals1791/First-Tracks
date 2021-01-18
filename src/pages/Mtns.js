import React from "react"
import SingleMtn from "../components/SingleMtn"
import mtnData from "../data/mountainData.js"

const Mtns = () => {

    const mountainInfo  = mtnData.map((ele, index)=> {
        return(
            <div>{ele.name}</div>
        )
    })

    return(
        <>
        <div> This is the moutains component</div>
        {mountainInfo}
        <SingleMtn mtn={mountainInfo}/>
        
        </>
    )
}
export default Mtns