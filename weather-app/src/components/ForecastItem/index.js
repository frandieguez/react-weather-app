import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';

const ForecastItem = ({ weekDay, hour, data }) => {
  return (
    <div>
      {weekDay} -  {hour} h
      <WeatherData data={data}></WeatherData>
    </div>
  );
}

ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
  })
}

export default ForecastItem;
