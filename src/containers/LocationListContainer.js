import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity, setWeather } from "../actions";
import { getWeatherCities } from "../reducers";
import LocationList from "../components/LocationList";

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, cities } = this.props;
    setWeather(cities);
  }
  handleSelectionLocation = city => {
    const { setSelectedCity } = this.props;
    setSelectedCity(city);
  };
  render() {
    const { citiesWeather } = this.props;
    return (
      <LocationList
        cities={citiesWeather}
        onSelectedLocation={this.handleSelectionLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array.isRequired
};
const mS = state => ({
  citiesWeather: getWeatherCities(state)
}); // mapStateToPros
const mD = { setSelectedCity, setWeather }; //mapDispatchToProps (actions)

export default connect(
  mS,
  mD
)(LocationListContainer);
