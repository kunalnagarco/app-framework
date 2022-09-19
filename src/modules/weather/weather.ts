import { response } from './response';
import { WeatherView } from './WeatherView';
import m from 'mithril';

export const Weather = () => {
  const API_KEY = 'f2bd99509976720d17dcbe849154051e';

  const _render = () => {
    console.log('_render called');
    const weatherContainer = document.getElementById(
      'module_weather_container',
    );
    m.render(weatherContainer, m(WeatherView, response));
  };

  return {
    start: () => {
      console.log('start');
      _render();
      // navigator.geolocation.getCurrentPosition(async (position) => {
      //   const { latitude, longitude } = position.coords
      //   const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
      //   console.log(response)
      // })
      // const location = 'Mississauga'
    },
    stop: () => {
      console.log('stop');
    },
  };
};
