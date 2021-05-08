import React, { useState, useEffect } from "react";
const api = {
  key: "7342d884a5a5ac4d8eeacd2a2196e300",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    console.log(query);
  });

  const search = async (e) => {
    if (e.key === "Enter") {
      const responce = await fetch(
        `${api.base}weather?q=${query}&unit=matric&appid=${api.key}`
      );
      const result = await responce.json();
      setWeather(result);
      setQuery("");
      console.log(result);
      // fetch(`${api.base}wether?q=${query}&unit=matric&appid=${api.key}`).then((res)=>{res.json()}).then(data=>setWeather(data));
    }
  };

  const date = (d) => {
    let months = ["January", "February"];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = d.toLocaleString("default", { weekday: "long" });
    let date = d.getDay();
    let month = d.toLocaleString("default", { month: "long" });
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search.."
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main!="undefined")?(
          <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
            </div>
            <div className="date">{date(new Date())} </div>
          </div>
          <div className="weather-box">
            <div className="temp">{Math.round(weather.main.temp)}</div>
            <div className="weather">Sunney</div>
          </div>
        </div>
        ):('')}
      </main>
    </div>
  );
}

export default App;
