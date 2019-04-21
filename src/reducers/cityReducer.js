import { ACTIONS } from "../actions";
import { createSelector } from "reselect";
import toPairs from "lodash.topairs";

const initialState = { city: "Caracas,ve" };

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CITY: {
      return { ...state, city: action.payload };
    }
    case ACTIONS.SET_FORECAST_DATA: {
      const { city, forecastData } = action.payload;
      return { ...state, [city]: { ...state[city], forecastData } };
    }
    case ACTIONS.SET_WEATHER_CITY: {
      const { city, weather } = action.payload;
      return { ...state, [city]: { ...state[city], weather } };
    }
    case ACTIONS.GET_WEATHER_CITY: {
      const city = action.payload;
      return { ...state, [city]: { ...state[city], weather: null } };
    }
    default:
      return state;
  }
};

const fromCitiesObjectToArray = cities =>
  toPairs(cities).map(([key, value]) => ({
    key,
    name: key,
    data: value.weather
  }));

export const getForecastDataFromCities = createSelector(
  (state, city) =>
    state.cityReducer[city] && state.cityReducer[city].forecastData,
  forecastData => forecastData
);

export const getWeatherCities = createSelector(
  state => fromCitiesObjectToArray(state.cityReducer),
  cities => cities
);
