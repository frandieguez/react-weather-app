import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Location = ({ city }) => {
  return (
    <div className="locationContainer">
      <h3>{ city }</h3>
    </div>
  )
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location;
