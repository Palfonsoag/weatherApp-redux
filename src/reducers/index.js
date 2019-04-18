import { combineReducers } from "redux";
import { cityReducer } from "./cityReducer";
import { getForecastDataFromCities as _getForecastDataFromCities } from "./cityReducer";

export default combineReducers({
  cityReducer
});

export const getCity = state => state.cityReducer.city;

export const getForecastDataFromCities = state =>
  _getForecastDataFromCities(state, getCity(state));
