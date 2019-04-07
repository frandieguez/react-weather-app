import React from 'react'
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types'

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

import './styles.css';

let LocationList = ({ cities, onSelectedLocation }) => (
  <div className="locationlist">
    {cities.map( (city, index) => (
      <React.Fragment key={index}>
        <ListItem button>
          <WeatherLocation
            key={`location-${index}`}
            city={city}
            onWeatherLocationClick={() => onSelectedLocation(city)} />
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
