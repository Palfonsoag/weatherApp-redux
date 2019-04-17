import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ForecastExtended from "../components/ForeCastExtended";

class ForecastExtendedContainer extends Component {
  render() {
    const { city } = this.props;
    return <ForecastExtended city={city} />;
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired
};
const mS = state => ({
  city: state.city
}); // mapStateToPros
const mD = {}; //mapDispatchToProps (actions)

export default connect(
  mS,
  mD
)(ForecastExtendedContainer);
