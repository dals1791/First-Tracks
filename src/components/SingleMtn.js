// React
import React from "react"
// components
import Weather from "../components/Weather"
import ToggleSwitch from "./toggleSwitch"
// React-Bootstrap Components ---------------------------
import Card from 'react-bootstrap/Card'


const SingleMtn = ({data, handleFavorites, favorites, iconColor}) => {
    const loaded =() =>{

        return(
        <>
           <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={data.logo} />
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        <Weather lat={data.lat} long={data.long}/>
                    </Card.Text>
                </Card.Body>
                <ToggleSwitch data={data} handleFavorites={handleFavorites} favorites={favorites} iconColor={iconColor} />
            </Card>
            
        </>
        )
    }
    const loading=()=>{
        return <></>
    }

    return(
        // <></>
        data ? loaded() : loading()
    )
}
export default SingleMtn

