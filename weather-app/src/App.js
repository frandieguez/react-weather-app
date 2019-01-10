import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation/';
import './App.css';
import { SUN, CLOUD } from './constants/weathers';


const data = {
  city: 'Pontevedra',
  temperature: 5,
  weatherState: CLOUD,
  humidity: 10,
  wind: 10,
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <WeatherLocation data={ data }></WeatherLocation>
      </div>
    );
  }
}

export default App;
