import React, {useState, useEffect} from "react"
// FontAwesome Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const ToggleSwitch =({data, handleFavorites, favorites})=>{
    console.log("this is data i toggle", data)
    console.log("This is favorites in toggle", favorites)
const iconColor = favorites.some((mtn)=>mtn.id===data.id) ? "red" : "grey"

return (
<FontAwesomeIcon 
style={{color: iconColor}}
icon={faHeart} size="2x" className="fav-icon" 
onClick={()=>{handleFavorites(data)}}
    />
)
}

export default ToggleSwitch