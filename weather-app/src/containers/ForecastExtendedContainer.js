import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getForecastDataFromCities } from './../reducers/';
import ForecastExtended from '../components/ForecastExtended';

const ForecastExtendedContainer = ({ city, forecastData }) => {
  return (
    <ForecastExtended city={city} forecastData={forecastData} />
  )
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string,
  forecastData: PropTypes.array,
}

const mapStatetoProps = state => ({
  city: state.city,
  forecastData: getForecastDataFromCities(state)
});

export default connect(mapStatetoProps, null)(ForecastExtendedContainer);
