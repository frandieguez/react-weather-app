import { SUN, CLOUD, RAIN, DRIZZLE, THUNDER, SNOW } from '../constants/weathers';

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

const transformWeather = weather_data => {
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

export default transformWeather
