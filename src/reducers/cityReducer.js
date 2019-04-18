import { ACTIONS } from "../actions";

const initialState = { city: "Caracas,ve" };

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CITY:
      return { ...state, city: action.payload };
    case ACTIONS.SET_FORECAST_DATA:
      const { city, forecastData } = action.payload;
      return { ...state, [city]: { forecastData } };
    default:
      return state;
  }
};

export const getForecastDataFromCities = (state, city) =>
  state.cityReducer[city] && state.cityReducer[city].forecastData;
