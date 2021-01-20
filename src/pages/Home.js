import React from "react"
import Weather from "../components/Weather"
// React-Bootstrap Components ---------------------------
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'


const Home = ({followed}) => {
    // console.log("This is the lifted weather", weather)
   const myMtns = followed?.map((ele, index)=>{
    return(
    <div key={ele.data.id} className="my-mtn">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ele.data.logo} />
            <Card.Body>
                <Card.Title>{ele.data.name}</Card.Title>
                <Card.Text>
                <Weather lat={ele.weather.lat} long={ele.weather.long}/>
                </Card.Text>
            </Card.Body>
        </Card>
        
    </div>
            
        
    )


   })
    return(
        <div className="home">{myMtns} </div>
    )
}
export default Home