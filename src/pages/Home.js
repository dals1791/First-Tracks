import React from "react"
import Weather from "../components/Weather"


const Home = ({followed}) => {
    // console.log("This is the lifted weather", weather)
   const myMtns = followed?.map((ele, index)=>{
    return(
        <div key={ele.data.id} className="myMtn">
            <div> {ele.data.name}</div>
            <Weather lat={ele.weather.lat} long={ele.weather.long}/>
        </div>
    )


   })
    return(
        <div className="home">{myMtns} </div>
    )
}
export default Home