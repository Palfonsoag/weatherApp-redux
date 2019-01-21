import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastItem from "./ForecastItem";
import { api_key, url_base_forecast } from "../constants/apiUrl";
import transformForecast from "../services/transformForecast";
import "./styles.css";

class ForeCastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    };
  }

  componentDidMount() {
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  }

  renderForecastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      />
    ));
  }

  updateCity = city => {
    const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;

    fetch(url_forecast)
      .then(response => response.json())
      .then(weather_data => {
        const forecastData = transformForecast(weather_data);
        this.setState({ forecastData });
      });
  };

  renderProgress() {
    return <h3>Cargando pronóstico extendido...</h3>;
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronóstico extendido para {city}</h2>
        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ForeCastExtended.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForeCastExtended;
