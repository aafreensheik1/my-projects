import React, { Component } from 'react';
import axios from 'axios';
import './weather-app.css';

class WeatherAppClass extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        query: '',
        weather: {},
        errorMessage: ''
    }

    render() {
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
        const handleClick = async () => {
            try {

                const { data } = await axios.get(`${api.base}weather?q=${this.state.query}&units=metric&APPID=${api.key}`);
                this.setState({ weather: data });
                this.setState({ errorMessage: null });
            }
            catch (e) {
                const { cod, message } = e.response.data;
                if (cod == 404) {
                    this.setState({ errorMessage: message });
                    this.setState({ weather: {} });
                }
            }
        };
        const { weather } = this.state;
        const weatherBackground = (typeof this.state.weather.main != "undefined") ?
            ((this.state.weather.main.temp) > 16 ?
                "weather-app-container-warm" : "weather-app-container") :
            "weather-app-container";
        return (
            <div className={weatherBackground}>
                <main>
                    <div className="search-box">
                        <input type="text"
                            className="search-bar"
                            placeholder='Search...'
                            onChange={e => { this.setState({ query: e.target.value }) }}
                            value={this.state.query}
                            onKeyPress={(event) => event.key === 'Enter' ? handleClick() : null} />
                        <button className="search-button"
                            onClick={handleClick}>
                            Search
                    </button>
                        <p className="error-message">
                            {this.state.errorMessage}</p>
                    </div>
                    <div className="date">
                        {dateBuilder(new Date())}
                    </div>
                    {(typeof this.state.weather.main != "undefined") ? (
                        <div className='weather-parameters'>
                            <div className="location-name">{weather.name}</div>
                            <div className="temp">{Math.round(weather.main.temp)}°C</div>
                            <div className="weather-data">{weather.weather[0].main}</div>
                        </div>
                    ) : ('')}
                </main></div>
        );
    }
};
export { WeatherAppClass }