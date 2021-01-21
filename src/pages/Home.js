import React from "react"
import Weather from "../components/Weather"
import ToggleSwitch from "../components/toggleSwitch"
// React-Bootstrap Components ---------------------------
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'
// FontAwesome Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Home = ({favorites, handleFavorites}) => {
    
    console.log(favorites)
//    const[state, setState]=useState(null)
const myMtns = favorites?.map((ele)=>{
        return(
            <Card key={ele.id} style={{ width: '18rem' }} className="home-card">
                <Card.Img variant="top" src={ele.logo} />
                <Card.Body>
                    <Card.Title>{ele.name}</Card.Title>
                    <Card.Text>
                    <Weather lat={ele.lat} long={ele.long}/>
                    </Card.Text>
                </Card.Body>
                <ToggleSwitch data={ele} handleFavorites={handleFavorites} favorites={favorites}/>
            </Card>
        )
   }) 

const loaded=()=>{  
   return (
       <>
         <Container className="home">{myMtns}</Container>
        </>
   )
}
const loading=()=>{
   return <Container><h2>Follow your mountains on the mountains page</h2></Container>
}

    
   return(
        // <Container className="home">{myMtns} </Container>
        favorites.length ? loaded(): loading()
    )
}
export default Home