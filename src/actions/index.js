export const ACTIONS = {
  SET_CITY: "SET_CITY"
};

export const setCity = value => {
  return { type: ACTIONS.SET_CITY, value };
};
