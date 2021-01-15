import React, {useState, useEffect} from "react"

const Jon = (props)=>{
    const [person, setPerson] = useState([])
    // const apiKey ="3_1KBCFX7q2QbmlnHjEq2I_9yP0AerShKhiWWxpN9hY"
    const getSnow = async () => {
      const response = await fetch("https://anapioficeandfire.com/api/characters/583")
      const data= await response.json()
      setPerson([data])
        }
      useEffect(()=>{getSnow()}, [ ])
    //   console.log("This is Snow state", person)

const JonSnow   = person?.map((ele,index)=>{

    return <div>{ele.name}</div>

})



return(
    <div>{JonSnow}</div>
)
}
export default Jon