import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Calculator, DrumMachine, WeatherAppClass, MainPage, MarkdownPreviewer, NotFound, RandomQuoteMachine, PomodoroClock } from '../components';

const Routes = () => {
    return (
        <Switch>
            <Route path="/random-quote-machine" component={RandomQuoteMachine} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/weather-app-class" component={WeatherAppClass} />
            <Route path='/drum-machine' component={DrumMachine} />
            <Route path="/markdown-previewer" component={MarkdownPreviewer} />
            <Route path="/pomodoro-clock" component={PomodoroClock} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={MainPage} />
            <Redirect to="/not-found" />

        </Switch>
    );
}

export default Routes;
