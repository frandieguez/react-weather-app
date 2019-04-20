import toPairs from 'lodash.topairs';
import { createSelector } from 'reselect';
import { SET_FORECAST_DATA, GET_WEATHER_CITY, SET_WEATHER_CITY } from '../actions'

// In order to city be a pure function it must:
// - Dont alter the state with state.city = VALUE
// - Create a copy of the state with {...state, CHANGES_HERE }
export const cities = (state = {}, action) => {

  switch (action.type) {
    case SET_FORECAST_DATA: {
      const { city, forecastData } = action.payload;

      return { ...state, [city]: {...state[city], forecastData} }
    }

    case GET_WEATHER_CITY: {
      const { city } = action.payload;

      return { ...state, [city]: { weather: null } }
    }

    case SET_WEATHER_CITY: {
      const { city, weather } = action.payload;

      return { ...state, [city]: {...state[city], weather } }
    }

    default:
      break;
  }

  return state;
}

export const getForecastDataFromCities =
  createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);

const fromCityObjectsToArray = objects => {
  return toPairs(objects)
    .map(([key, value]) => ({key, name: key, data: value.weather}));
};

export const getWeatherCities = createSelector(
  state => fromCityObjectsToArray(state),
  cities => cities
);
