import { api_key, url_base_forecast } from "../constants/apiUrl";
import transformForecast from "../services/transformForecast";
import getUrlWeatherByCity from "../services/getUrlWeatherByCity";
import transformWeather from "../services/transformWeather";

export const ACTIONS = {
  SET_CITY: "SET_CITY",
  SET_FORECAST_DATA: "SET_FORECAST_DATA",
  SET_WEATHER: "SET_WEATHER",
  GET_WEATHER_CITY: "GET_WEATHER_CITY",
  SET_WEATHER_CITY: "SET_WEATHER_CITY"
};

const setForecastData = payload => {
  return {
    type: ACTIONS.SET_FORECAST_DATA,
    payload
  };
};

const setCity = payload => {
  return { type: ACTIONS.SET_CITY, payload };
};

const setWeatherCity = payload => {
  return { type: ACTIONS.SET_WEATHER_CITY, payload };
};
const getWeatherCity = payload => {
  return { type: ACTIONS.GET_WEATHER_CITY, payload };
};
export const setSelectedCity = payload => {
  return (dispatch, getState) => {
    const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;
    dispatch(setCity(payload));
    const state = getState();
    const date =
      state.cityReducer[payload] && state.cityReducer[payload].forecastDataDate;
    const now = new Date();
    if (date && now - date < 1 * 60 * 100) {
      return;
    }
    return fetch(url_forecast)
      .then(response => response.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};

export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city));
      const api_weather = getUrlWeatherByCity(city);
      fetch(api_weather)
        .then(resolve => {
          return resolve.json();
        })
        .then(weatherData => {
          const weather = transformWeather(weatherData);
          dispatch(setWeatherCity({ city, weather }));
        });
    });
  };
};
