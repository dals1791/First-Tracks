import React from "react"
import Weather from "../components/Weather"

const SingleMtn = (props) => {
    
    const singleMtnData = props.mtn.map((ele, index)=> {
        // console.log("this is single mtn props", props.mtn)    
        // console.log("This is single mtn name", ele.name)
        return(
            <div className="singleMtn" key={index}>
            <div> This is the Single moutains component</div>
            <div>{ele.name}</div>
            <Weather lat={ele.lat} long={ele.long}/>
        
            </div>
        )


    })
    
    
    
    return(
        <div>
        {singleMtnData}
        </div>
    )
}
export default SingleMtn