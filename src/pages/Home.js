import React from "react"
import Weather from "../components/Weather"
// React-Bootstrap Components ---------------------------
import Container from "react-bootstrap/Container"
import Card from 'react-bootstrap/Card'


const Home = ({homeMtns}) => {
    // console.log("This is the lifted weather", weather)
//    const[state, setState]=useState(null)
const myMtns = homeMtns.map((ele)=>{
    return(
        <Card key={ele.data.id} style={{ width: '18rem' }} className="home-card">
            <Card.Img variant="top" src={ele.data.logo} />
            <Card.Body>
                <Card.Title>{ele.data.name}</Card.Title>
                <Card.Text>
                <Weather lat={ele.weather.lat} long={ele.weather.long}/>
                </Card.Text>
            </Card.Body>
        </Card>
    )
   }) 

const loaded=()=>{  
    

   return (
    <>
    {/* <h2>{followed[0].data.name}</h2> */}
   <Container className="home">{myMtns}</Container>
    </>
   )
}
const loading=()=>{
   return <Container><h2>Follow your mountains on the mountains page</h2></Container>
}

    
   return(
        // <Container className="home">{myMtns} </Container>
        homeMtns.length ? loaded(): loading()
    )
}
export default Home