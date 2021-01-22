import React, { useEffect } from "react";
// components
import Weather from "../components/Weather";
import ToggleSwitch from "../components/toggleSwitch";
// React-Bootstrap Components ---------------------------
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Home = ({ favorites, handleFavorites, storageFavorites }) => {
  const myMtns = favorites?.map((ele) => {
    return (
      <Card key={ele.id} style={{ width: "18rem" }} className="home-card">
        <Card.Img variant="top" src={ele.logo} />
        <Card.Body>
          <Card.Title>{ele.name}</Card.Title>
          <Card.Text>
            <Weather lat={ele.lat} long={ele.long} />
          </Card.Text>
        </Card.Body>
        <ToggleSwitch
          data={ele}
          handleFavorites={handleFavorites}
          favorites={favorites}
        />
      </Card>
    );
  });

  useEffect(() => {
    let localFavorites = JSON.parse(localStorage.getItem("favorites"));
    storageFavorites(localFavorites);
  }, []);

  const loaded = () => {
    return (
      <>
        <Container className="home">{myMtns}</Container>
      </>
    );
  };
  const loading = () => {
    return (
      <Container className="home-text">
        <div>Go to the mountains page and hit the     
        <FontAwesomeIcon id="homeheart"icon={faHeart}/> 
        to follow your Go-Tos! </div>
      </Container>
    );
  };

  return favorites.length ? loaded() : loading();
};
export default Home;
