import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions'
import { getWeatherCities, getCity } from '../reducers'
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {

  componentDidMount = () => {
    const { setWeather, setSelectedCity, citiesWeather, city} = this.props;

    setWeather(citiesWeather);

    setSelectedCity(city)
  }

  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={(city) => this.props.setSelectedCity(city)}
      >
      </LocationList>
    )
  }
}

LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func.isRequired,
  citiesWeather: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  cities: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

// The two assignements below are equivalent, redux provides a helper to
// automatically match actions to state.
// const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);
const mapDispatchToProps = dispatch => ({
  setSelectedCity: value => dispatch(actions.setSelectedCity(value)),
  setWeather: cities => dispatch(actions.setWeather(cities))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
