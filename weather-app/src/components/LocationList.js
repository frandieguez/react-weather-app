import React from 'react'
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types'

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import './styles.css';

let handlerLocationClick = (city, onSelectedLocation) => {
  onSelectedLocation(city)
}

let LocationList = ({ cities, onSelectedLocation }) => (
  <div className="locationlist">
    {cities.map( (city, index) => (
      <React.Fragment>
        <ListItem button key={index}>
          <WeatherLocation
            key={`location-${index}`}
            city={city}
            onWeatherLocationClick={() => handlerLocationClick(city, onSelectedLocation)} />
        </ListItem>
        <Divider />
      </React.Fragment>
    ))}
  </div>
)

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func.isRequired,
}

export default LocationList
