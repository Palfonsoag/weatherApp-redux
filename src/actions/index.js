import { api_key, url_base_forecast } from "../constants/apiUrl";
import transformForecast from "../services/transformForecast";

export const ACTIONS = {
  SET_CITY: "SET_CITY",
  SET_FORECAST_DATA: "SET_FORECAST_DATA"
};

const setCity = payload => {
  return { type: ACTIONS.SET_CITY, payload };
};

const setForecastData = payload => {
  return {
    type: ACTIONS.SET_FORECAST_DATA,
    payload
  };
};

export const setSelectedCity = payload => {
  return dispatch => {
    const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;
    dispatch(setCity(payload));

    return fetch(url_forecast)
      .then(response => response.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        dispatch(setForecastData({ city: payload, forecastData }));
      });
  };
};
