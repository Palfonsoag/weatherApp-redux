export const ACTIONS = {
  SET_CITY: "SET_CITY"
};

export const setCity = payload => {
  return { type: ACTIONS.SET_CITY, payload };
};
