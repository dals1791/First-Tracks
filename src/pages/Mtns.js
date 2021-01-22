import React, { useEffect, useState } from "react";
import SingleMtn from "../components/SingleMtn";
import AllMtn from "../components/AllMtn";
import mtnData from "../data/mountainData.js";
// React-Bootstrap Components ---------------------------
import Container from "react-bootstrap/Container";

const Mtns = (props) => {
  const mountains = mtnData?.map((ele) => {
    return <AllMtn {...ele} />;
  });

  const [singleMtn, setSingleMtn] = useState();

  const handleDisplayMtn = (obj) => {
    setSingleMtn(obj);
  };
  useEffect(() => handleDisplayMtn(), []);
  return (
    <Container className="mountain-list">
      <div className="all-mtn">
        <AllMtn mtn={mountains} handleClick={handleDisplayMtn} />
      </div>
      <Container className="single-mtn">
        <SingleMtn
          data={singleMtn}
          handleFavorites={props.handleFavorites}
          favorites={props.favorites}
        />
      </Container>
    </Container>
  );
};
export default Mtns;
