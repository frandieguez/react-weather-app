import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './style.css';
import { transformWeather } from '../../services/transformWeather';
import *  as Openweather from '../../services/api_url';
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'

class WeatherLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      data: null
    }
  }

  handleUpdateClick = async () => {
    this.setState({data: null})
    fetch(Openweather.getApiUrl(this.state.city)).then((data) => {
      return data.json();
    }).then((data) => {
      data = transformWeather(data)

      this.setState({
        data
      });
    }).catch((err) => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.handleUpdateClick();
  }

  onWeatherLocationClick = () => {
    this.props.onWeatherLocationClick(this.state.city)
  }

  render () {
    let { city, data } = this.state;
    return (
      <div className="weatherLocationContainer" onClick={this.onWeatherLocationClick}>
        <Location city={city}></Location>
        {data ?
          (
              <Paper>
                <WeatherData data={data}></WeatherData>
              </Paper>
              // <button onClick={this.handleUpdateClick}>Update</button>
          )
          :
          <CircularProgress/>
        }
      </div>
    );
  }
}

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func.isRequired,
}

export default WeatherLocation;
