import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Routes from './routing/routes';

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
