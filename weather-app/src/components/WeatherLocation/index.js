import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import { CLOUD, SUN } from '../../constants/weathers';

const location = 'Caldas de Reis, es';
const api_key = 'd9ad11fb4b6b8357afd1540e2b7e20d3';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather?units=metric';

const api_weather = `${url_base_weather}&q=${location}&appid=${api_key}`;

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

  getData = weather_data => {
    const { humidity, temp }  = weather_data.main;
    const {speed } = weather_data.wind;
    const weatherState = SUN;

    const data = {
      city: weather_data.name,
      data: {
        humidity,
        temperature: temp,
        weatherState,
        wind: speed
      }
    }

    return data;
  }

  handleUpdateClick = () => {

    fetch(api_weather).then((data) => {
      return data.json();
    }).then(body => {
      console.log(body);

      this.setState(this.getData(body));
    })
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
