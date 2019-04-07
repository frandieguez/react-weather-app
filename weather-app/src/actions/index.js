import * as Openweather from '../services/api_url';
import { transformForecast} from '../services/transformWeather';

export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'

// Create an action creator
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload});

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
