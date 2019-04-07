import { SET_FORECAST_DATA } from '../actions'
import { createSelector } from 'reselect';

// In order to city be a pure function it must:
// - Dont alter the state with state.city = VALUE
// - Create a copy of the state with {...state, CHANGES_HERE }
export const cities = (state = {}, action) => {

  switch (action.type) {
    case SET_FORECAST_DATA:
      const { city, forecastData } = action.payload;

      return { ...state, [city]: { forecastData } }
    default:
      break;
  }

  return state;
}

export const getForecastDataFromCities =
  createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData);
