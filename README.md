# GA - SEIR 1207 Project 2 - Sean Daly

## Project Description

<p>Deciding on where to ski or snowboard? Mountain Tracker can help!</p>

<p>Mountain Tracker is an app that allows you to get updates on weather and other information for your go-to ski & snowboard resorts all in one place. </p>
 
## API

The app uses a weather data API created by https://openweathermap.org/api/  </br>
Example API Call:</br>

```
Endpoint: https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

API Response: 

{
  "lat": 33.44,
  "lon": -94.04,
  "timezone": "America/Chicago",
  "timezone_offset": -21600,
  "current": {
    "dt": 1595243443,
    "sunrise": 1608124431,
    "sunset": 1608160224,
    "temp": 274.75,
    "feels_like": 270.4,
    "pressure": 1017,
    "humidity": 96,
    "dew_point": 274.18,
    "uvi": 0,
    "clouds": 90,
    "visibility": 6437,
    "wind_speed": 3.6,
    "wind_deg": 320,
    "weather": [
      {
        "id": 701,
        "main": "Mist",
        "description": "mist",
        "icon": "50n"
      }
    ]
  },
  "minutely": [
    {
      "dt": 1595243460,
      "precipitation": 0
    },
    ...
  },
    "hourly": [
    {
      "dt": 1595242800,
      "temp": 274.75,
      "feels_like": 271.22,
      "pressure": 1017,
      "humidity": 96,
      "dew_point": 274.18,
      "uvi": 0,
      "clouds": 90,
      "visibility": 1765,
      "wind_speed": 2.43,
      "wind_deg": 303,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.1
    },
    ...
  }
"daily": [
        {
      "dt": 1595268000,
      "sunrise": 1608124431,
      "sunset": 1608160224,
      "temp": {
        "day": 278.14,
        "min": 273.15,
        "max": 279.4,
        "night": 273.15,
        "eve": 275.82,
        "morn": 275.35
      },
      "feels_like": {
        "day": 273.53,
        "night": 270.26,
        "eve": 271.89,
        "morn": 272.11
      },
      "pressure": 1021,
      "humidity": 70,
      "dew_point": 273.27,
      "wind_speed": 3.74,
      "wind_deg": 323,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": 60,
      "pop": 0.84,
      "uvi": 2.41
    },
    ...
    },
"alerts": [
    {
      "sender_name": "NWS Tulsa (Eastern Oklahoma)",
      "event": "Heat Advisory",
      "start": 1597341600,
      "end": 1597366800,
      "description": "...HEAT ADVISORY REMAINS IN EFFECT FROM 1 PM THIS AFTERNOON TO\n8 PM CDT THIS EVENING...\n* WHAT...Heat index values of 105 to 109 degrees expected.\n* WHERE...Creek, Okfuskee, Okmulgee, McIntosh, Pittsburg,\nLatimer, Pushmataha, and Choctaw Counties.\n* WHEN...From 1 PM to 8 PM CDT Thursday.\n* IMPACTS...The combination of hot temperatures and high\nhumidity will combine to create a dangerous situation in which\nheat illnesses are possible."
    },
    ...
  ]

```

## WireFrames and Architecture

- ### Wireframe
    - [Mobile and Tablet](https://i.imgur.com/G6SymvQ.jpg)
    - [Desktop](https://i.imgur.com/D8fxRJj.jpg)

- ### Architecture

    - [React Architecture](https://docs.google.com/drawings/d/1oa4LSppOR4HILg5qeeeIGCAvEAg6EevgMvck7GDskJ4/edit?usp=sharing)

## MVP

- ### MVP
    - Create React App 
    - Call and Render 3rd party API using Fetch, Async/Await
    - Include React Router with 2 Routes
    - Use 5 seperate components
    - Mobile First Design
    - Use React Hooks
    - Deploy via Netlify
    - Populate data for 1 mountain (Name, Latitude, longitude, logo, website url)

- ### Post-MVP
    - Add controlled search form/input.
    - Populate MountainData.js with additional Mountain info.
    - Get Twitter feed for mountain via Twitter API. 
    - Add notes section for each mountain. 
    - Add distance, drive time to mountain. 
    - Add geolocation with latitude and longitude to map of US. 


## Components

|Component|Description|
|---------|-----------|
|App|Renders other Components, Contains Routes.|
|Nav|Creates links to other sections, Home, Mountains, About.|
|Home| Renders saved/favorited single mountains for real time weather tracking.|
|Mountains|Contains list of mountains to select from with basic mountain information.|
|About|Section that provides information about the app, contact, and other useful info.|
|All Mountain Info| Creates a clickable list of mountains in the mountains page|
|Single Mountain Info|Renders specific information pertianing to specific mountain. Such as Weather data.|
|Weather|Pull real time data from [OpenWeatherMap.org](https://openweathermap.org/api) to be rendered in Single Mountain info.| 


## Time/Priority Matrix

### Tasks
- #### MVP
    - |Task|Priority|Estimated Time|Actual Time|Status|
      |----|--------|--------------|-----------|------|
      |Setup App and all Components|H|1hr| 0.5hr|COMPLETE|
      |Add Router|H|0.5Hr|0.5hr|COMPLETE|
      |Create mountainData.JS|M|0.5hr|0.5hr|COMPLETE|
      |Call API and and render info to Single Mountain|H|5hr|4hr|COMPLETE|
      |Add button, lift state, and render to Home for Single Mountain|H|5hr|10hr|COMPLETE|
      |Styling|M|10hrs|1hr|IN PROGRESS|
      |bug fixes/final polish|M|3hr|TBD|
      |Deploy to Netlify|H|2hr|0.5hr|COMPLETE|
      |Total Time||27hrs|17hrs|

- ### Post-MVP
    - |Task|Priority|Estimated Time|Actual Time|
      |----|--------|--------------|-----------|
      |Add Search form/input|M|3hrs|TBD|
      |Get Twitter Feed for mountain updates|L|10hrs|TBD|
      |Get drive data|L|10hrs|TBD|
      |Add geolocate to US map for pin|M|5hrs|TBD|
      |Update mountain.data with more mountains|H|3hrs|TBD|
      |Add Notes Section to single mountains|M|3hrs|TBD|
      |Total Time||34hrs|TBD|

## Additional Libraries
-  React Bootstrap

## Code Snippet

## Issues

1. Looping mountainData.js information through API call to get weather for specific lat and long. 
  - Resolution: Passed latitude and longitude down as props from singleMtn after mapping. useEffect updates whenever lat/long change and then added lat and long to API url via interpolation to call specific weather data based on the location. 
    ```
    const Weather = (props) => {
      // console.log("This is props", props)
      const apiKey= "bbb59f00c92b004f07e523eaa0647cf7"
      const [weather, setWeather] = useState(null)
      let lat = props.lat
      let long = props.long
      
      
      const getWeather = async () => {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&exclude=hourly,daily&appid=${apiKey}`)
          const data= await response.json()
          setWeather([data])
      }
      useEffect(()=>getWeather(lat, long), [lat, long])
    

2. Infinite loop with API call using useEffect, blocked API key due to too many calls per minute. 
  - Error Code: "React Hook useEffect has a missing dependency: 'getWeather'. Either include it or remove the dependency array  react-hooks/exhaustive-deps"
  - Resolution: Need to include dependency array to avoid infinite render. Also need to create a valid dependency to remove error code. 
    ```
    useEffect(()=>getWeather(lat, long), [lat, long])
  
    A blank dependency array will yield the error code seen above

3. Lift Weather API data to Home page onClick of "Follow button". Currently can only lift the hard coded data in mountainData.js. 
  - Questions:
    - Can you lift an entire component and render everything that was defined in a child component?
    - Does the structure need to be re-arranged to get Weather Data in the home page onCLick? 
  - Resolution: Need to pass hard data and api data as a single object in order to map and render together. [{}, {}].
    ```
    const [myMtns, setMyMtns]= useState([])
    const addToHome =(data, weather)=>{
    
    setMyMtns([...myMtns, {data, weather}]) 
    }

4. Cant display "loading()" prompt on home screen before adding favorite mountains.
    ```
    return(
        
        homeMtns ? loaded(): loading()
    )
  - resolution: state was and array which is naturally true. ternary function was activated imediately. Updated conditional to be state.length which is naturally false when the array.length is empty. 

    ```
      return(
        
         homeMtns ? loaded(): loading()
      )
5. Saving mountains to a favorites array and keeping track of state
  - resolution: I had too many states. Only need one favorite state that add removes via splice, push, and splice. slie creates a new array from the state, push add the object data when clicked, splice removes the object data from the array and then the state is set to the sliced array after adding or removing the data. 
    ```
    const handleFavorites = (data) => {
      const addFavorites = favorites.slice();
      const idMatch = favorites.some((mtn) => mtn.id === data.id);
      if (idMatch === true) {
        const index = addFavorites.indexOf(data);
        addFavorites.splice(index, 1);
        setFavorites(addFavorites);
      } else {
        addFavorites.push(data);
        setFavorites(addFavorites);
      }
    };

6. Local Storage to save favorites on home page after closing the app. 
  - localStorage.setItem("name to call data being stored", data to store)
    - when using local storage, the data being stored needs to be in a string. Use JSON.stringfy(data to store). Placed into a useEffect to store data on first render. 
    ```
    useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

  - localStorage.getItem("name to call data being stored").
    - getItem is placed where the data is required. Needs to be parsed. use JSON.parse(localStorage.getItem("name to call data being stored")).
    - for First-Tracks the getItem is on Home.js page. It is set into a useEffect so it renders onthe first render. additionally it was set to update the favorites state so that it renders right away. 
    ```
    useEffect(() => {
    let localFavorites = JSON.parse(localStorage.getItem("favorites"));
    storageFavorites(localFavorites);
    }, []);

