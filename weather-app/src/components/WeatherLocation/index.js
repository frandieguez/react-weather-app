import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';

class WeatherLocation extends Component {

  render () {
    let { data } = this.props;

    return (
      <div className="weatherLocationContainer">
          <Location city={data.city}></Location>
          <WeatherData data={data}></WeatherData>
      </div>
    );
  }
}

export default WeatherLocation;
