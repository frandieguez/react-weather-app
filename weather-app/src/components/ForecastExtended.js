import PropTypes from 'prop-types';
import React from 'react';
import ForecastItem from './ForecastItem';
import './styles.css';
import * as Openweather from '../services/api_url';
import CircularProgress from '@material-ui/core/CircularProgress'
import { transformForecast} from '../services/transformWeather';

class ForecastExtended extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      forecastData: []
    }
  }

  renderForecastItemDays() {
    if (!this.state.forecastData) {
      return;
    }

    return (this.state.forecastData.map((day, index) => {
      return <ForecastItem
          key={index}
          weekDay={day.weekDay}
          hour={day.hour}
          data={day.data}>
        </ForecastItem>
    }));
  }

  fetchData(city) {
    fetch(Openweather.getForecastUrl(city)).then((data) => {
      return data.json();
    }).then((data) => {
      if (!data.list) {
        return;
      }

      data = transformForecast(data);

      this.setState({
        forecastData: data
      });
    })
  }

  componentDidMount() {
    this.fetchData(this.props.ticy)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.fetchData(nextProps.city)
    }
  }

  render() {
    const {city} = this.props;
    const { forecastData } = this.state;

    return (
      forecastData ?
        (
          <React.Fragment>
            <h2 className='forecastTitle'>Prognostico extendido para {city}</h2>
            {this.renderForecastItemDays()}
          </React.Fragment>
        )
        :
        <CircularProgress/>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired
}

export default ForecastExtended;
