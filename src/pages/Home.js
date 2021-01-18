import React from "react"

const Home = ({followed}) => {
   const myMtns = followed?.map((ele, index)=>{
    return(
        <div> {ele.name}</div>
    )


   })
    return(
        <div>{myMtns} </div>
    )
}
export default Home