import React, { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";
import "./styles.css";
import { SUN, WINDY } from "../../constants/weathers";

const data = {
  temperature: 5,
  weatherState: SUN,
  humidity: 10,
  wind: "10 m/s"
};

const testData = {
  temperature: 5,
  weatherState: WINDY,
  humidity: 20,
  wind: "10 m/s"
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
    console.log("actualizado");
    this.setState({
      city: "Miranda",
      data: testData
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
