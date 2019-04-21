import { combineReducers } from "redux";
import { createSelector } from "reselect";
import { cityReducer } from "./cityReducer";
import {
  getForecastDataFromCities as _getForecastDataFromCities,
  getWeatherCities as _getWeatherCities
} from "./cityReducer";

export default combineReducers({
  cityReducer
});

//export const getCity = state => state.cityReducer.city;

export const getCity = createSelector(
  state => state.cityReducer.city,
  city => city
);

/*export const getForecastDataFromCities = state =>
  _getForecastDataFromCities(state, getCity(state));*/

export const getForecastDataFromCities = createSelector(
  state => state,
  getCity,
  _getForecastDataFromCities
);

export const getWeatherCities = createSelector(
  state => state,
  _getWeatherCities
);
