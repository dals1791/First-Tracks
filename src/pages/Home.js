import React from "react"
import Weather from "../components/Weather"


const Home = ({followed}) => {
    // console.log("This is the lifted weather", weather)
   const myMtns = followed?.map((ele, index)=>{
    return(
        <>
        <div> {ele.data.name}</div>
        <Weather lat={ele.weather.lat} long={ele.weather.long}/>
        </>
    )


   })
    return(
        <div>{myMtns} </div>
    )
}
export default Home