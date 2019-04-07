import React from 'react'
import { connect } from 'react-redux';
import { setSelectedCity } from '../actions'
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';

const LocationListContainer = ({cities, setSelectedCity}) => {
  return (
    <LocationList cities={cities} onSelectedLocation={(city) => setSelectedCity(city)}></LocationList>
  )
}

LocationListContainer.propTypes = {
  cities: PropTypes.array.isRequired,
  setSelectedCity: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setSelectedCity: value => dispatch(setSelectedCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);
