import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity } from "../actions";
import LocationList from "../components/LocationList";

class LocationListContainer extends Component {
  handleSelectionLocation = city => {
    const { setSelectedCity } = this.props;
    setSelectedCity(city);
  };
  render() {
    const { cities } = this.props;
    return (
      <LocationList
        cities={cities}
        onSelectedLocation={this.handleSelectionLocation}
      />
    );
  }
}

LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};
const mS = state => ({}); // mapStateToPros
const mD = { setSelectedCity }; //mapDispatchToProps (actions)

export default connect(
  mS,
  mD
)(LocationListContainer);
