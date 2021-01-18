import React from "react"
import Weather from "../components/Weather"

const SingleMtn = (props) => {
    return(
        <>
        <div> This is the Single moutains component</div>
        <Weather mtnInfo={props.mtn}/>
        </>
    )
}
export default SingleMtn