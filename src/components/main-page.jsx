import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../utilities/card';
import './main-page.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainPage = () => {
    const myApps = {
        "calculator": "Calculator",
        "drum-machine": "Drum Machine",
        "markdown-previewer": "Markdown Previewer",
        "pomodoro-clock": "Pomodoro Clock",
        "random-quote-machine": "Random Quote Machine"
    }
    return (
        <div className='container'>
            { /* <Link to="/calculator" >Calculator</Link> */}
            {Object.keys(myApps).map(key => <Card key={key} keyName={key} value={myApps[key]} />)}

        </div>

    );
}


export { MainPage };