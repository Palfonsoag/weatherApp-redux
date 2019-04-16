import React, { Component } from "react";
import { Grid, Col, Row } from "react-flexbox-grid";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import LocationListContainer from "./containers/LocationListContainer";
import ForeCastExtended from "./components/ForeCastExtended";

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
  constructor() {
    super();
    this.state = {
      city: null
    };
  }

  render() {
    const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={6}>
              <div className="details">
                {city ? (
                  <ForeCastExtended city={city} />
                ) : (
                  <h1>No se seleccionó una ciudad</h1>
                )}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
