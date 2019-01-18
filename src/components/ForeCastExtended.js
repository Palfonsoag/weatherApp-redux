import React, { Component } from "react";
import PropTypes from "prop-types";

class ForeCastExtended extends Component {
  render() {
    const { city } = this.props;
    return <div> pronostico extendido para {city}</div>;
  }
}

ForeCastExtended.propTypes = {
  city: PropTypes.string.isRequired
};

export default ForeCastExtended;
