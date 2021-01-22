import React, { useState, useEffect } from "react";
// FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Weather = (props) => {
  const apiKey = "bbb59f00c92b004f07e523eaa0647cf7";
  const [weather, setWeather] = useState(null);
  let lat = props.lat;
  let long = props.long;

  const getWeather = async (lat, long) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=hourly,daily&appid=${apiKey}`
    );
    const data = await response.json();
    setWeather([data]);
  };

  useEffect(() => getWeather(lat, long), [lat, long]);

  const WeatherInfo = weather?.map((ele, index) => {
    let icon = null;
    const description = ele.current.weather[0].description;
    const moonIcon = () => {
      if (ele.current.weather[0].icon == "01n") {
        return <FontAwesomeIcon icon={faMoon} />;
      } else {
        return (
          <img
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt={description}
          />
        );
      }
    };

    return (
      <div key={index} className="weather">
        {Math.floor(ele.current.temp)}°F,
        <span> {moonIcon()} </span>
        Feels Like: {Math.floor(ele.current.feels_like)}°F
      </div>
    );
  });

  return <div>{WeatherInfo}</div>;
};
export default Weather;
