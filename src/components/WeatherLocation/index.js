import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import transformWeather from "../../services/transformWeather";
import { api_weather } from "../../constants/apiUrl";
import PropTypes from "prop-types";
import { SUN } from "../../constants/weathers";
import "./styles.css";

const data = {
  humidity: 10,
  temperature: 5,
  weatherState: SUN,
  wind: `10 m/s`
};
class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Caracas",
      data: data
    };
  }

  handleUpdateClick = () => {
    fetch(api_weather)
      .then(resolve => {
        return resolve.json();
      })
      .then(weather => {
        const newWeather = transformWeather(weather);
        console.log(newWeather);
        this.setState({
          data: newWeather
        });
      });
  };

  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        <WeatherData data={data} />
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    );
  }
}

export default WeatherLocation;
