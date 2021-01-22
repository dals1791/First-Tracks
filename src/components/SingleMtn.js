// React
import React from "react";
// components
import Weather from "../components/Weather";
import ToggleSwitch from "./toggleSwitch";
// React-Bootstrap Components ---------------------------
import Card from "react-bootstrap/Card";

const SingleMtn = ({ data, handleFavorites, favorites, iconColor }) => {
  const loaded = () => {
    return (
      <>
        <Card className="card-shape" style={{ width: "16rem" }}>
          <Card.Img variant="top" src={data.logo} />
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
              <Weather lat={data.lat} long={data.long} />
              <a className="mtn-url" href={data.url}>{data.url}</a>
            </Card.Text>
            <div className="toggle-icon"> <ToggleSwitch
            data={data}
            handleFavorites={handleFavorites}
            favorites={favorites}
            iconColor={iconColor}
            
          /></div>
          </Card.Body>
          
        </Card>
      </>
    );
  };
  const loading = () => {
    return <></>;
  };

  return (
    // <></>
    data ? loaded() : loading()
  );
};
export default SingleMtn;
