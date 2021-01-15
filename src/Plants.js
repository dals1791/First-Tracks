import React, {useState, useEffect} from "react"


const Plants = (props)=>{

    const [plant, setPlant] = useState(null)
    const apiKey ="3_1KBCFX7q2QbmlnHjEq2I_9yP0AerShKhiWWxpN9hY"
    const getPlant = async () => {
      const response = await fetch(`https://trefle.io/api/v1/plants?token=${apiKey}`)
      const data= await response.json()
      setPlant(data)
        }
      useEffect(()=>{getPlant()}, [ ])
    //   console.log("This is Plant state", plant)

const PlantInfo   = plant?.data.map((ele,index)=>{

    return <div>{ele.name}</div>

})

    return(
        <div>{PlantInfo}</div>
    )
}
export default Plants