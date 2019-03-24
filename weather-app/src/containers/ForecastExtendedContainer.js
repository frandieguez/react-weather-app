import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ForecastExtended from '../components/ForecastExtended';

const ForecastExtendedContainer = (props) => {
  return (
    !props.city
    ? <div>Por favor selecciona una ciudad</div>
    : <ForecastExtended city={props.city} />
  )
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
}

const mapStatetoProps = state => ({ city: state.city });

export default connect(mapStatetoProps, null)(ForecastExtendedContainer);

