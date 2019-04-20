import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'

export const WeatherLocation = ({onWeatherLocationClick, city, data}) => (
  <div className="weatherLocationContainer" onClick={onWeatherLocationClick}>
    <Location city={city}></Location>
    {data ?
      (
          <Paper>
            <WeatherData data={data}></WeatherData>
          </Paper>
      )
      :
      <CircularProgress size={60} thickness={7} />
    }
  </div>
)

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
  }),
}

export default WeatherLocation;
