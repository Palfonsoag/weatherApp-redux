import React, { Component } from "react";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../actions";
import { getWeatherCities, getCity } from "../reducers";
import LocationList from "../components/LocationList";

class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, cities, setSelectedCity, city } = this.props;

    setWeather(cities);
    setSelectedCity(city);
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
  setWeather: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired
};
const mS = state => ({
  city: getCity(state),
  citiesWeather: getWeatherCities(state)
}); // mapStateToPros
//const mD = { setSelectedCity, setWeather }; //mapDispatchToProps (actions)
const mD = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mS,
  mD
)(LocationListContainer);
