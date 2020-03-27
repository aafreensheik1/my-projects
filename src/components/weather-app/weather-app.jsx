import React from 'react';
import axios from 'axios';
import './weather-app.css';
import { useState } from 'react';
import { useEffect } from 'react';
const WeatherApp = () => {
    const api = {
        key: '2e8aa193afccd37c5234655632ed442e',
        base: 'https://api.openweathermap.org/data/2.5/'
    }
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    }
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const handleClick = async () => {
        const { data } = await axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`);
        setWeather(data);
        console.log(data);
    };
    const weatherBackground = (typeof weather.main != "undefined") ?
        ((weather.main.temp) > 16 ?
            "weather-app-container-warm" : "weather-app-container") :
        "weather-app-container";
    return (

        <div className={weatherBackground}>
            <main>
                <div className="search-box">
                    <input type="text"
                        className="search-bar"
                        placeholder='Search...'
                        onChange={e => setQuery(e.target.value)}
                        value={query} />
                    <button className="search-button"
                        onClick={handleClick}>
                        Search
                        </button>
                </div>
                <div className="date">
                    {dateBuilder(new Date())}
                </div>
                {(typeof weather.main != "undefined") ? (
                    <div className='weather-parameters'>
                        <div className="location-name">{weather.name}</div>
                        <div className="temp">{Math.round(weather.main.temp)}°C</div>
                        <div className="weather-data">{weather.weather[0].main}</div>
                    </div>
                ) : ('')}
            </main>
        </div>
    );

}

export { WeatherApp };