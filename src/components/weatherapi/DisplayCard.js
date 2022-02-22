import React from "react";
import PropTypes from "prop-types";
import SunRise from "../img/sunrise.png";
import Sunset from "../img/sunset.png";
import { FaThermometerQuarter, FaTachometerAlt } from "react-icons/fa";
import { TiWeatherWindy } from "react-icons/ti";

import { WiHumidity } from "react-icons/wi";
import { Row, Col, Container, Card, Image } from "react-bootstrap";

const DisplayCard = ({ data }) => {
  console.log(data);

  return (
    <Container fluid style={{ padding: "0px 25px 100px 25px" }}>
      <Row
        style={{
          padding: "20px 0px",
        }}
      >
        <Col xs={4}>
          <h5>Weather App</h5>
        </Col>
      </Row>

      <div style={{ marginLeft: "400px" }}>
        <Card
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            border: "1px solid white",
            backgroundColor: "rgb(183 177 189)",
            maxWidth: "650px",
            minWidth: "auto,",
          }}
        >
          <div className="text-center">
            <Image
              width="500"
              height="250"
              src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`}
            />
          </div>
          <div className="text-center">
            <strong>{data.data.weather[0].main}</strong>
          </div>
          <Card.Body>
            <div
              className="text-center "
              style={{
                textTransform: "uppercase",
                color: "#000000",
              }}
            >
              <strong style={{ fontSize: "30px" }}>{data.data.name}</strong>
              <strong style={{ fontSize: "30px", marginLeft: "12px" }}>
                {data.data.main.temp}ºC
              </strong>
            </div>
          </Card.Body>

          <Row>
            <div className=" d-flex justify-content-between align-items-center m-3">
              <Col md={4}>
                <div
                  className=" align-items-center "
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <FaThermometerQuarter style={{ fontSize: "30px" }} />
                  {data.data.main.feels_like} feels like
                </div>
              </Col>
              <Col md={4}>
                <div
                  className=" align-items-center "
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <TiWeatherWindy style={{ fontSize: "30px" }} />
                  {data.data.wind.speed} meter/sec
                </div>
              </Col>
              <Col md={4}>
                <div
                  className="align-items-center"
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <WiHumidity style={{ fontSize: "30px" }} />
                  {data.data.main.humidity}%
                </div>
              </Col>
            </div>
          </Row>
          <br></br>
          <Row>
            <div className="d-flex justify-content-between align-items-center m-3 mb-5">
              <Col md={4}>
                <div
                  className=" align-items-center "
                  style={{
                    fontSize: "20px",
                  }}
                >
                  <FaTachometerAlt
                    style={{
                      fontSize: "30px",
                      marginRight: "4px",
                    }}
                  />
                  {data.data.main.pressure} hPa
                </div>
              </Col>
              <Col md={4}>
                <div
                  className="align-items-center"
                  style={{
                    fontSize: "20px",
                    marginLeft: "4px",
                  }}
                >
                  <Image src={SunRise} />

                  {new Date(data.data.sys.sunrise * 1000).toLocaleTimeString()}
                </div>
              </Col>
              <Col md={4}>
                <div
                  className="align-items-center"
                  style={{
                    fontSize: "20px",
                    marginLeft: "4px",
                  }}
                >
                  <Image src={Sunset} />

                  {new Date(data.data.sys.sunset * 1000).toLocaleTimeString()}
                </div>
              </Col>
            </div>
          </Row>
        </Card>
      </div>
    </Container>
  );
};
//Checking PropTypes In DisplayCard Component

DisplayCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    sys: PropTypes.shape({
      sunrise: PropTypes.number,
      sunset: PropTypes.number,
    }),
    main: PropTypes.shape({
      feels_like: PropTypes.number,
      pressure: PropTypes.number,
      humidity: PropTypes.number,
      temp: PropTypes.number,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        description: PropTypes.string,
      })
    ),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
  }),
};
export default DisplayCard;
