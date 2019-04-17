import { ACTIONS } from "../actions";

const initialState = {};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CITY:
      return { ...state, city: action.payload };
    default:
      return state;
  }
};
