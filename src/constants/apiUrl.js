const location = "Caracas,ve";
const api_key = "5cfcf757ca5edb0285dbf8e7513ed795";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;
