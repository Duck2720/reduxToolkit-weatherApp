import { axiosClient } from "./axiosClient";

const API_KEY = "97c848b579d71e0c5df6605498f9c7a1";

const getApi = {
  getDataCity: (action) => {
    return axiosClient.get(`weather?q=${action}&units=metric&appid=${API_KEY}`);
  },
  getData: ({ latitude, longtitude }) => {
    return axiosClient.get(
      `onecall?lat=${latitude}&lon=${longtitude}&units=metric&appid=${API_KEY}`
    );
  },
};

export default getApi;
