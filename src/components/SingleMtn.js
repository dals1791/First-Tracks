import React from "react"
import Weather from "../components/Weather"
// React-Bootstrap Components ---------------------------
import Card from 'react-bootstrap/Card'
// FontAwesome Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const SingleMtn = ({data, addData}) => {
    
    const loaded =() =>{

        return(
        <>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={data.props.logo} />
                <Card.Body>
                    <Card.Title>{data.props.name}</Card.Title>
                    <Card.Text>
                        <Weather lat={data.props.lat} long={data.props.long}/>
                    </Card.Text>
                </Card.Body>
                <FontAwesomeIcon className="fav-icon" icon={faHeart} size="2x" onClick={()=>{addData(data.props, 
                    {lat: data.props.lat, long: data.props.long})}}/>
            </Card>
        </>
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