import React from "react";
import SearchWeather from "../component/search/SearchWeather";
import Content from "../component/content/Content";
import "./Page.scss";

const Page = () => {
  return (
    <div className="page-content">
      <div className="left">
        <SearchWeather />
      </div>
      <div className="right">
        <Content />
      </div>
    </div>
  );
};

export default Page;
