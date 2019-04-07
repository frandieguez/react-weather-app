import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getForecastDataFromCities } from './../reducers/cities';
import ForecastExtended from '../components/ForecastExtended';

const ForecastExtendedContainer = ({ city, forecastData }) => {
  return (
    city && <ForecastExtended city={city} forecastData={forecastData} />
  )
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string,
  forecastData: PropTypes.object,
}

const mapStatetoProps = state => ({
  city: state.city,
  forecastData: getForecastDataFromCities(state.cities, state.city)
});

export default connect(mapStatetoProps, null)(ForecastExtendedContainer);
