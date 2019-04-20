import { SUN, CLOUD, RAIN, DRIZZLE, THUNDER, SNOW } from '../constants/weathers';
import moment from 'moment';
import 'moment/locale/es';

const getWeatherState = weather => {
  const { id } = weather;
  if (id < 300) {
    return THUNDER;
  } else if (id < 400) {
    return DRIZZLE;
  } else if (id < 500) {
    return RAIN;
  } else if (id < 500) {
    return SNOW;
  } else if (id === 800) {
    return SUN;
  } else {
    return CLOUD;
  }
}

export const transformWeather = weather_data => {
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather_data.weather[0])

  return {
    temperature: temp,
    humidity,
    wind: speed,
    weatherState,
  }
}

export const transformForecast = weather_data => {

  return weather_data.list.filter((item) => {

    return moment.unix(item.dt).utc().hour() === 6 ||
      moment.unix(item.dt).utc().hour() === 12 ||
      moment.unix(item.dt).utc().hour() === 18;
    }).map((item) => {
      return {
        weekDay: moment.unix(item.dt).format('dddd'),
        hour: moment.unix(item.dt).hour(),
        data: transformWeather(item)
      }
    });

}

export default {
  transformWeather,
  transformForecast
}
