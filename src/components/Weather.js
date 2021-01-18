import React, {useState, useEffect}  from "react"

const Weather = (props) => {
    
    const apiKey= "bbb59f00c92b004f07e523eaa0647cf7"
    const [weather, setWeather] = useState(null)
    let lat = props.lat
    let long = props.long
    
    
    const getWeather = async (lat, long) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=hourly,daily&appid=${apiKey}`)
        const data= await response.json()
        setWeather([data])
    }
    
    useEffect(()=>getWeather(lat, long), [lat, long])  
    

    const WeatherInfo = weather?.map((ele, index)=>{
        return (
            <div key={index}>
                <div>This is current Temp: {Math.floor(ele.current.temp)} °F</div>
                <div>This is the timezone: {ele.timezone}</div>
                <div>This is the location: {ele.lat} by {ele.lon}</div>
            
            </div>
        )    
    })

    return(
        <div>{WeatherInfo}</div>
    )
}
export default Weather