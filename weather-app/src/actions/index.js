import * as Openweather from '../services/api_url';
import { transformForecast, transformWeather } from '../services/transformWeather';

export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY'
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY'

// Create an action creator
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload });

export const setSelectedCity = payload => {
  return dispatch => {
    dispatch(setCity(payload));

    // activate in state an data searched indicator
    fetch(Openweather.getForecastUrl(payload)).then((data) => {
      return data.json();
    }).then( weatherData => {
      console.log(payload)
      if (!weatherData.list) {
        return;
      }

      var forecastData = transformForecast(weatherData);

      // change state with the Promise result (fetch)
      dispatch(setForecastData({ city: payload, forecastData }))
    })
  }
}

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city));

      fetch(Openweather.getApiUrl(city)).then((data) => {
        return data.json();
      }).then((data) => {
        var weather = transformWeather(data)

        // change state with the Promise result (fetch)
        dispatch(setWeatherCity({ city, weather }))
      }).catch((err) => {
        console.log(err)
      })

    });
  }
}
