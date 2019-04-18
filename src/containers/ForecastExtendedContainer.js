import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ForecastExtended from "../components/ForeCastExtended";
import { getForecastDataFromCities, getCity } from "../reducers";
import getUrlWeatherByCity from "../services/getUrlWeatherByCity";

class ForecastExtendedContainer extends Component {
  render() {
    console.log(this.props);
    const { city, forecastData } = this.props;
    return city && <ForecastExtended city={city} forecastData={forecastData} />;
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array
};
const mS = state => ({
  city: getCity(state),
  forecastData: getForecastDataFromCities(state)
}); // mapStateToPros
const mD = {}; //mapDispatchToProps (actions)

export default connect(
  mS,
  mD
)(ForecastExtendedContainer);
