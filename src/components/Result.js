// Hiển thị thông tin thời tiết
import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";
import "../scss/Style.scss";

const Result = ({ weather }) => {
  const {
    city,
    country,
    date,
    description,
    main,
    temp,
    sunset,
    sunrise,
    humidity,
    wind,
    highestTemp,
    lowestTemp,
  } = weather;

  //Icon thời tiết chính
  let weatherIcon = null;
  switch (main) {
    case "Thunderstorm":
      weatherIcon = <FontAwesomeIcon icon={faBolt} />;
      break;
    case "Drizzle":
      weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
      break;
    case "Rain":
      weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
      break;
    case "Snow":
      weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
      break;
    case "Clear":
      weatherIcon = <FontAwesomeIcon icon={faSun} />;
      break;
    case "Clouds":
      weatherIcon = <FontAwesomeIcon icon={faCloud} />;
      break;
    default:
      weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  }

  return (
    <div className="result">
      <div className="wrapper">
        <h2 className="big-label text-center">
          {/* Tên thành phố và quốc gia */}
          {city}, {country}
        </h2>
        <h4 className="small-label">{date}</h4>
      </div>
      <div className="current-weather">
        <div className="weather-icon">{weatherIcon}</div>
        <div>
          <h3 className="temperature">{Math.floor(temp - 273.15)}&#176;</h3>
          <p className="small-label">{description}</p>
        </div>
      </div>
      <div className="detail-wrapper">
        <div className="weather-detail">
          <h4 className="small-label">
            {Math.floor(highestTemp - 273.15)}&#176;
          </h4>
          <span className="text" align="center">
            Cao nhất
          </span>
        </div>
        <div className="weather-detail">
          <h4 className="small-label" align="center" weight="400">
            {wind.toFixed(1)}mph
          </h4>
          <span className="text" align="center">
            Gió
          </span>
        </div>
        <div className="weather-detail">
          <h4 className="small-label" align="center" weight="400">
            {sunrise}
          </h4>
          <span className="text" align="center">
            MT mọc
          </span>
        </div>
        <div className="weather-detail">
          <h4 className="small-label" align="center" weight="400">
            {Math.floor(lowestTemp - 273.15)}&#176;
          </h4>
          <span className="text" align="center">
            Thấp nhất
          </span>
        </div>
        <div className="weather-detail">
          <h4 className="small-label" align="center" weight="400">
            {humidity}%
          </h4>
          <span className="text" align="center">
            Độ ẩm
          </span>
        </div>
        <div className="weather-detail">
          <h4 className="small-label" align="center" weight="400">
            {sunset}
          </h4>
          <span className="text" align="center">
            MT lặn
          </span>
        </div>
      </div>
    </div>
  );
};

Result.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    main: PropTypes.string,
    temp: PropTypes.number,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    humidity: PropTypes.number,
    wind: PropTypes.number,
    highestTemp: PropTypes.number,
    lowestTemp: PropTypes.number,
  }).isRequired,
};

// export default React.memo(Result);
export default Result;
