import React from "react";
import WeatherLocation from "./WeatherLocation";

const LocationList = () => {
  return (
    <div>
      <WeatherLocation city={"Caracas,ve"} />
      <WeatherLocation city={"Miranda,ve"} />
      <WeatherLocation city={"Lisboa,por"} />
      <WeatherLocation city={"Madrid,spa"} />
      <WeatherLocation city={"Buenos Aires,ar"} />
    </div>
  );
};

export default LocationList;
