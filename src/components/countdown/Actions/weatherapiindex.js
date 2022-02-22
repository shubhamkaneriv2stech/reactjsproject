import { SET_WEATHERAPIDATA } from "../types/Types";
import axios from "axios";
import { WEATHER_API_KEY } from "../../GlobalConstants/ApiKeys";
import { city } from "../../GlobalConstants/VariableCity";

//Declaration of Country Name
const country = "India";
//Declaration of Unit Name
const units = "metric";
//Declaration of APi URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}&units=${units}`;

export const fetchWeatherApiData = () => {
  return (dispatch) => {
    // const res = async () => {
    //   try {
    //     const response = await axios.get(apiUrl);
    //     console.log(response);
    //     return response;
    //   } catch (error) {
    //     console.error(error);
    //   }

    axios
      .get(apiUrl)
      .then(function (response) {
        const data = response;
        dispatch(setApiData(data));
      })
      .catch(function (error) {
        //   console.log(error);
      });
  };
};

export const setApiData = (data) => {
  console.log(data);
  if (data) {
    return {
      type: SET_WEATHERAPIDATA,
      payload: data,
    };
  }

  return {
    type: SET_WEATHERAPIDATA,
    payload: null,
  };
};
