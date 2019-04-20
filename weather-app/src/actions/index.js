import * as Openweather from '../services/api_url';
import { transformForecast, transformWeather } from '../services/transformWeather';

// Define action names
export const SET_CITY          = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'
export const GET_WEATHER_CITY  = 'GET_WEATHER_CITY'
export const SET_WEATHER_CITY  = 'SET_WEATHER_CITY'

// Create an action creator
const setCity         = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});
const getWeatherCity  = payload => ({type : GET_WEATHER_CITY, payload });
const setWeatherCity  = payload => ({type : SET_WEATHER_CITY, payload });

export const setSelectedCity = payload => {
  return dispatch => {
    dispatch(setCity(payload));

    // activate in state an data searched indicator
    return fetch(Openweather.getForecastUrl(payload)).then((data) => {
      return data.json();
    }).then( weatherData => {
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
      dispatch(getWeatherCity(city.name));

      return fetch(Openweather.getApiUrl(city.name)).then((data) => {
        return data.json();
      }).then((data) => {
        var weather = transformWeather(data)

        // change state with the Promise result (fetch)
        dispatch(setWeatherCity({ city: city.name, weather }))
      }).catch((err) => {
        console.log(err)
      })

    });
  }
}
