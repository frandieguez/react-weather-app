import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setSelectedCity, setWeather } from '../actions'
import { getWeatherCities } from '../reducers'
import PropTypes from 'prop-types';
import LocationList from '../components/LocationList';

class LocationListContainer extends Component {

  componentDidMount = () => {
    console.log('calling setWeather', this.props.citiesWeather)
    this.props.setWeather(this.props.citiesWeather);
  }

  render() {
    return (
      <LocationList cities={this.props.citiesWeather} onSelectedLocation={(city) => this.props.setSelectedCity(city)}></LocationList>
    )
  }
}

LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  citiesWeather: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({ citiesWeather: getWeatherCities(state) })

const mapDispatchToProps = dispatch => ({
  setSelectedCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
