import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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

const mapStatetoProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData });

export default connect(mapStatetoProps, null)(ForecastExtendedContainer);
