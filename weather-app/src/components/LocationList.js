import React from 'react'
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types'

let handlerLocationClick = (city, onSelectedLocation) => {
  console.log(city)
  onSelectedLocation(city)
}

let LocationList = ({ cities }) => (
  <div>
    {cities.map( (city, index) => (
      <WeatherLocation
        key={`location-${index}`}
        city={city}
        onWeatherLocationClick={() => handlerLocationClick(city, )} />
    ))}
  </div>
)

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func.isRequired,
}

export default LocationList
