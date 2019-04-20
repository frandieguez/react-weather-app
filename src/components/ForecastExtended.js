import PropTypes from 'prop-types';
import React from 'react';
import ForecastItem from './ForecastItem';
import './styles.css';
import CircularProgress from '@material-ui/core/CircularProgress'

const renderForecastItemDays = (city, forecastData) => (
  <React.Fragment>
    <h2 className='forecastTitle'>Prognostico extendido para {city}</h2>
    {forecastData.map((day, index) => {
      return <ForecastItem
          key={index}
          weekDay={day.weekDay}
          hour={day.hour}
          data={day.data}>
        </ForecastItem>
    })}
  </React.Fragment>
)

const renderLoading = (city) => (
  <React.Fragment>
    <p>Fetching data for {city}</p>
    <CircularProgress/>
  </React.Fragment>
)

const ForecastExtended = ({ city, forecastData })  => (
  forecastData ?
    renderForecastItemDays(city, forecastData)
    : (city) ? renderLoading(city) : 'Please select a city to load its data'
)

ForecastExtended.propTypes = {
  city: PropTypes.string,
  forecastData: PropTypes.array,
}

export default ForecastExtended;
