import React from "react"
import Weather from "../components/Weather"
// React-Bootstrap Components ---------------------------
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'

const SingleMtn = ({data, addData}) => {
    
    const loaded =() =>{

        return(
        <>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={data.props.logo} />
                <Card.Body>
                    <Card.Title>{data.props.name}</Card.Title>
                    <Card.Text>
                        <Weather lat={data.props.lat} long={data.props.long}/>
                    </Card.Text>
                    <button className="follow-btn" onClick={()=>{addData(data.props, 
                    {lat: data.props.lat, long: data.props.long})}}> 
                    + Follow +</button>
                </Card.Body>
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