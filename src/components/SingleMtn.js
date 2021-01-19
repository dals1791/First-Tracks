import React from "react"
import Weather from "../components/Weather"

const SingleMtn = ({data, addData}) => {
    
    const loaded =() =>{

        return(
            <div className="singleMtn">
                <div> This is the Single moutains component</div>
                <div>{data.props.name}</div> 
                <Weather lat={data.props.lat} long={data.props.long}/>
                <button onClick={()=>{addData(data.props, 
                {lat: data.props.lat, long: data.props.long})}}> + Follow +</button>
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