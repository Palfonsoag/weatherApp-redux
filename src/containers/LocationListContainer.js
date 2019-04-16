import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCity } from "../actions";
import LocationList from "../components/LocationList";

class LocationListContainer extends Component {
  handleSelectionLocation = city => {
    const { setCity } = this.props;
    setCity(city);
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
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};
const mS = state => ({}); // mapStateToPros
const mD = { setCity }; //mapDispatchToProps (actions)

export default connect(
  mS,
  mD
)(LocationListContainer);
