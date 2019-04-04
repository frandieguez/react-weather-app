import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ForecastExtended from '../components/ForecastExtended';

const ForecastExtendedContainer = ({ city }) => {
  return (
    !city
    ? <div>Por favor selecciona una ciudad</div>
    : <ForecastExtended city={city} />
  )
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
}

const mapStatetoProps = state => ({ city: state.city });

export default connect(mapStatetoProps, null)(ForecastExtendedContainer);
