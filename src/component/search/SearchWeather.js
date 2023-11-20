import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../feature/weatherSlice";
import "./SearchWeather.scss";
import clouds from "../../images/Clouds.png";
import heavyrain from "../../images/banner.webp";

const SearchWeather = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const DataCity = useSelector((state) => state.weather.dataCity);
  const Data = useSelector((state) => state.weather.data);
  console.log(DataCity);
  console.log(Data);

  function bodauTiengViet(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    return str;
  }

  const WEEK_DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dateFormat = (strDate) => {
    const date = new Date(strDate * 1000);
    return WEEK_DAYS[date.getDay()];
  };

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

  useEffect(() => {
    dispatch(getCity("hanoi"));
  }, [dispatch]);

  function handleSearch(e) {
    e.preventDefault();
    dispatch(getCity(bodauTiengViet(city)));
    setCity(" ");
  }
  return (
    <div className="search-content">
      <form onSubmit={handleSearch}>
        <input
          className="input-search"
          type="text"
          placeholder="Search"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        ></input>
      </form>
      <div className="img-search">
        <img src={clouds}></img>
      </div>
      <div className="name">{DataCity.name}</div>
      <div className="temp">{Math.floor(DataCity.main?.temp)}°C</div>
      <div className="day-time">
        {dateFormat(DataCity.dt)}, {timeFormat(DataCity.dt)}
      </div>
      <div className="overcast">
        Overcast {Data.current?.weather[0]?.description}
      </div>
      <div className="cloud">Cloud {DataCity.clouds?.all}%</div>
      <div className="img-name">
        <img src={heavyrain}></img>
        <div className="name-img">{DataCity.name}</div>
      </div>
    </div>
  );
};

export default SearchWeather;
