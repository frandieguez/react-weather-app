import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import { CLOUD, SUN } from '../../constants/weathers';

class WeatherLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: props.data.city,
      data: {
        temperature: props.data.temperature,
        weatherState: props.data.weatherState,
        humidity: props.data.humidity,
        wind: props.data.wind,
      }
    }
  }

  handleUpdateClick = () => {
    this.setState({
      data: {
        temperature: 20,
        weatherState: SUN,
      }
    });
  }

  render () {
    let { city, data } = this.state;

    return (
      <div className="weatherLocationContainer">
          <Location city={city}></Location>
          <WeatherData data={data}></WeatherData>
          <button onClick={this.handleUpdateClick}>Update</button>
      </div>
    );
  }
}

export default WeatherLocation;
