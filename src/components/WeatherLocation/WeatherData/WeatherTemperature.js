import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {
    CLOUD,
    CLOUDY,
    RAIN,
    SUN,
    SNOW,
    WINDY,
    FOG,
} from './../../../constants/weathers';


const icons = {
    [CLOUD]:"cloud",
    [CLOUDY]:"cloudy",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [WINDY]:"windy",
    [FOG]: "day-fog",
}

const getWeatherIcon = weatherState => {
    
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if (icon) {
        return(
            <WeatherIcons className="wicon" name ={icon} size={sizeIcon}/>
        );
    }
    else{
        return(
            <WeatherIcons className="wicon" name ="day-haze" size={sizeIcon}/>
        );
    }

}

const WeatherTemperature =({temperature, weatherState})=>{
   
   return(
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{` ${temperature}`}</span>
        <span className="temperatureType">{`C°`}</span>
    </div>
   );
};

WeatherTemperature.propTypes ={
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,

};

export default WeatherTemperature;