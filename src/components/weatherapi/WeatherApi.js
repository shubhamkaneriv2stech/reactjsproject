import { useEffect, useState } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";
import { WEATHER_API_KEY } from "../GlobalConstants/ApiKeys";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import { Fragment } from "react";
const WeatherApi = () => {
  const weatherApiData = useSelector((state) => state.weatherApiReducer);

  console.log(weatherApiData, " api calling");
  console.log(" api calling");

  //State For Storing Weather Api  data
  const [weatherDetails, setWeatherDetails] = useState(null);
  // State For the Loader Part
  const [loader, setLoader] = useState(true);
  //State for the ErrorMsg When Something Wrong In Fetching Api Data
  const [errorMsg, setErrorMsg] = useState(null);

  //Declaration of City Name
  let city = "Latur";
  //Declaration of Country Name
  let country = "India";
  //Declaration of Unit Name
  let units = "metric";
  //Declaration of APi URL
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}&units=${units}`;

  // // Used for All Clean up When Component is Unmounted  And mounted
  // useEffect(() => {
  //   let mounted = true;
  //   //Function For Getting Api Data And Setting in WeatherDetails State
  //   const fetchWeather = () => {
  //     axios
  //       .get(apiUrl)
  //       .then(function (response) {
  //         if (mounted) {
  //           setWeatherDetails(response);
  //           // console.log(response);
  //           setLoader(false);
  //         }
  //       })
  //       .catch(function (error) {
  //         // handle error
  //         //   console.log(error);
  //         setErrorMsg("Data Not Available");
  //         setLoader(false);
  //       });
  //   };
  //   fetchWeather();
  //   return function cleanup() {
  //     mounted = false;
  //   };
  // }, []);

  //Checking Whether data Set or Not
  //   console.log(weatherDetails);

  // Returning Statement

  return (
    <div className="app">
      <div className="text-center"> {errorMsg}</div>
      {loader ? (
        <Fragment>
          <div
            style={{
              padding: "200px",
              color: "red",
              textAlign: "center",
            }}
          >
            <CircularProgress color="secondary" />
            <h1>Loading Data Please wait...</h1>
          </div>
          <div style={{ visibility: "hidden" }}>
            {setTimeout(() => {
              setLoader(false);
            }, 1000)}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {weatherApiData && <DisplayCard data={weatherApiData} />}
        </Fragment>
      )}
    </div>
  );
};

export default WeatherApi;
