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
|Nav|Creates links to other sections, HOme, Mountains, About.|
|Home| Renders saved/favorited single mountains for real time weather tracking.|
|Mountains|Contains list of mountains to select from with basic mountain information.|
|About|Section that provides information about the app, contact, and other useful info.|
|Single Mountain Info|Renders specific information pertianing to specific mountain. Such as Weather data.|
|Weather|Pull real time data from [OpenWeatherMap.org](https://openweathermap.org/api) to be rendered in Single Mountain info.| 


## Time/Priority Matrix

### Tasks
- #### MVP
    - |Task|Priority|Estimated Time|Actual Time|
      |----|--------|--------------|-----------|
      |Setup App and all Components|H|1hr| TBD|
      |Add Router|H|0.5Hr|TBD|
      |Create mountainData.JS|M|0.5hr|TBD|
      |Call API and and render info to Single Mountain|H|5hr|TBD|
      |Add button, lift state, and render to Home for Single Mountain|H|5 hr|TBD|
      |Styling|M|10hrs|TBD|
      |bug fixes/final polish|M|3hr|TBD|
      |Deploy to Netlify|H|2hr|TBD|
      |Total Time||27hrs|TBD|

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