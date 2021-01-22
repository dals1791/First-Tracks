import React from "react";
// React-Bootstrap Components ---------------------------
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <Container className = "about">
      <p>Deciding on where to ski or snowboard? Mountain Tracker can help!</p>

      <p>
        Mountain Tracker is an app that allows you to get updates on weather and
        other information for your go-to ski & snowboard resorts all in one
        place.</p>
      <p>The app uses a weather data API created by 
          <a className="api" href="https://openweathermap.org/api/"> https://openweathermap.org/api/</a>
          </p>
      <Container className="contact">
          <p>Feel free to contact me @:</p>
      <ul className="about-list">
          <li>daly.se91@gmail.com</li>
          <li><a className="contact-link" href="https://github.com/dals1791">GitHub</a></li>
          <li><a className="contact-link" href="https://www.linkedin.com/in/seandaly0593/">LinkedIn</a></li>
          <li><a className="contact-link" href="https://dals1791.github.io/">And check my protfolio out</a></li>
      </ul>
      </Container>
    </Container>
  );
};
export default About;
