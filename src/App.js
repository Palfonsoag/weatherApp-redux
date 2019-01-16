import React, { Component } from "react";
import LocationList from "./components/LocationList";
import "./App.css";

const cities = [
  "Caracas,ve",
  "Vigo,es",
  "Lisboa,por",
  "Madrid,spa",
  "Buenos Aires,ar",
  "Lima,pe"
];
class App extends Component {
  handleSelectionLocation = city => {
    console.log("not getting it");
  };
  render() {
    return (
      <div className="App">
        <LocationList
          cities={cities}
          onSelectedLocation={this.handleSelectionLocation}
        />
      </div>
    );
  }
}

export default App;
