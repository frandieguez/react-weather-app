import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
  SUN,
  CLOUD,
  THUNDER,
  DRIZZLE,
  RAIN,
  SNOW,
  WINDY,
} from '../../../constants/weathers';
import './style.css';

const icons = {
  [CLOUD]: 'cloud',
  [SUN]: 'day-sunny',
  [RAIN]: 'rain',
  [THUNDER]: 'day-thunderstorm',
  [DRIZZLE]: 'day-showers',
  [SNOW]: 'snow',
  [WINDY]: 'windy',
}

const getWeatherIcon = (weatherState) => {
  let icon = icons[weatherState];
  let sizeIcon = '3x';

  if (icon === undefined) {
    icon = "day-sunny";
  }

  return <WeatherIcons className="wicon" name={ icon } size={sizeIcon} />
}

const WeatherTemperature = ({temperature, weatherState}) => (
  <div className="WeatherTemperatureContainer">
    <span>  { getWeatherIcon(weatherState) } </span>
    <span className="temperature">{temperature}</span>
    <span className="temperatureType"> º C</span>
  </div>
)

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
}

export default WeatherTemperature;
