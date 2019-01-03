import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import {
  SUN,
  CLOUD,
  CLOUDY,
  RAIN,
  SNOW,
  WINDY,
} from '../../../constants/weathers';
import './style.css';

const WeatherData = ({ data: { temperature, humidity, wind, weatherState } }) => {
    return (
      <div className="WeatherDataContainer">
        <WeatherTemperature temperature={temperature} weatherState={ weatherState }/>
        <WeatherExtraInfo humidity={humidity} wind={wind} />
      </div>
    );
}

WeatherData.proptypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
  }),
}

export default WeatherData;
