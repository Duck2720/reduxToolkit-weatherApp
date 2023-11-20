import React from "react";
import { useSelector } from "react-redux";
import "./Today.scss";

const Today = () => {
  const data = useSelector((state) => state.weather.data);

  function windFormat(value) {
    return Math.round(value * 3.6 * 100) / 100;
  }

  const timeFormat = (mili) => {
    const date = new Date(mili * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  return (
    <div className="weather-today">
      <div className="info">
        <div className="info-name">UV-index</div>
        <i className="fa-solid fa-sun sun-icon"></i>
        <div className="info-number">{data.current?.uvi}</div>
      </div>
      <div className="info">
        <div className="info-name">Wind Status</div>
        <i className="fa-solid fa-wind wind-icon"></i>
        <div className="info-number">
          {windFormat(data.current?.wind_speed)} km/h
        </div>
      </div>
      <div className="info">
        <div className="info-name"> Sunrise-Sunset</div>
        <div className="sunrise-sunset">
          <div className="sunrise">
            <i className="fa-solid fa-sun sunrise-icon"></i>
            <div className="info-number">
              {timeFormat(data.current?.sunrise)}
            </div>
          </div>
          <div className="sunset">
            <i className="fa-solid fa-sun-plant-wilt sunset-icon"></i>
            <div className="info-number">
              {timeFormat(data.current?.sunset)}
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info-name">Humidity</div>
        <i className="fa-solid fa-water humidity-icon"></i>
        <div className="info-number">{data.current?.humidity}</div>
      </div>
      <div className="info">
        <div className="info-name">Visibility</div>
        <i className="fa-solid fa-clock-rotate-left visibility-icon"></i>
        <div className="info-number">{data.current?.visibility / 1000} km</div>
      </div>
      <div className="info">
        <div className="info-name">Pressure</div>
        <i className="fa-solid fa-temperature-quarter pressure-icon"></i>
        <div className="info-number">{data.current?.pressure}</div>
      </div>
    </div>
  );
};

export default Today;
