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

const renderLoading = () => (
  <React.Fragment>
    <p>Fetching data</p>
    <CircularProgress/>
  </React.Fragment>
)

const ForecastExtended = ({ city, forecastData })  => {
  return (
    forecastData ?
      renderForecastItemDays(city, forecastData)
      : renderLoading()
  )
}

ForecastExtended.propTypes = {
  city: PropTypes.string,
  forecastData: PropTypes.array,
}

export default ForecastExtended;
