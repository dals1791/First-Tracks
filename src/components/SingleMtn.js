import React from "react"
import Weather from "../components/Weather"

const SingleMtn = ({data}) => {
    // console.log("This is singlemtn props/state", data?.props.name)
    
    const loaded =() =>{

        return(<div className="singleMtn">
        <div> This is the Single moutains component</div>
        <div>{data.props.name}</div> 
        <Weather lat={data.props.lat} long={data.props.long}/>
    </div>

        )
    }
    const loading=()=>{
        return <></>
    }
    
    
    
    return(
        data ? loaded() : loading()
        
    )
}
export default SingleMtn