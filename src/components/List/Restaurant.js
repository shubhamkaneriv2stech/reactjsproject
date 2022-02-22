import React, { useState, useEffect } from "react";
import { Card, Table, Image, Container } from "react-bootstrap";

import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Fragment } from "react";
const Restaurant = (props) => {
  const [restaurant, setRestaurant] = useState({
    hours: {
      monday: {},
      tuesday: {},
      wednesday: {},
      thursday: {},
      friday: {},
      saturday: {},
      sunday: {},
    },
  });

  const [spinner, setspinner] = useState(true);
  // const obj = props.location.myCustomProps;
  // console.log(obj.hours);
  // console.log(typeof props);

  useEffect(() => {
    const obj = props.location.myCustomProps;
    setRestaurant(obj);

    setTimeout(() => {
      setspinner(false);
    }, 2500);
  }, [props.location.myCustomProps]);

  return (
    <Fragment>
      {spinner ? (
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
      ) : (
        <div style={{ paddingLeft: "13px" }}>
          <Container fluid>
            <Breadcrumbs
              aria-label="breadcrumb"
              style={{ marginBottom: "24px", marginTop: "10px" }}
            >
              <Link to="/list">List</Link>

              <Typography color="textPrimary">{restaurant.name}</Typography>
            </Breadcrumbs>
          </Container>

          <div>
            <Card
              style={{
                width: "93rem",
                marginLeft: "13px",
                backgroundColor: "rgb(245, 240, 240)",
              }}
            >
              <Image src={restaurant.logo} width="1487" height="450" />
              <Card.Body>
                <Card.Title className="text-center">
                  {restaurant.name}
                </Card.Title>
                <Card.Text style={{ textAlign: "center" }}>
                  {restaurant.type}
                </Card.Text>

                <div className="d-flex  ">
                  <LocationOnIcon style={{ marginRight: "10px" }} />
                  {restaurant.address}
                </div>
                <br />
                <div className="d-flex  ">
                  <PhoneIcon style={{ marginRight: "10px" }} />
                  {restaurant.phone_number}
                </div>
              </Card.Body>
            </Card>
          </div>
          <br />
          <div>
            <Card
              style={{
                width: "93rem",
                marginLeft: "13px",
                backgroundColor: "rgb(245, 240, 240)",
              }}
            >
              <Card.Body>
                <Card.Title className="text-start">Description</Card.Title>
                <Card.Text style={{ textAlign: "start" }}>
                  {restaurant.description}
                </Card.Text>
                <Card.Title className="text-start">Review</Card.Title>
                <Card.Text style={{ textAlign: "start" }}>
                  {restaurant.review}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <br />
          <div style={{ paddingLeft: "13px", paddingRight: "22px" }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Open at</th>
                  <th>Closed at</th>
                  <th>Closed/Open</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(restaurant.hours).map(([key, value], i) => {
                  return (
                    <tr key={i}>
                      <td
                        style={{
                          textTransform: "uppercase",
                          fontWeight: "bold",
                        }}
                      >
                        {key}
                      </td>
                      <td>{value.opens_at}</td>
                      <td>{value.closes_at}</td>
                      <td>
                        {value.is_closed ? (
                          <strong
                            style={{
                              color: "red",
                            }}
                          >
                            Closed
                          </strong>
                        ) : (
                          <strong
                            style={{
                              color: "green",
                            }}
                          >
                            Open
                          </strong>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      )}
    </Fragment>
  );
};

//Checking the PropTypes in the Component CardRs
Restaurant.propTypes = {
  props: PropTypes.object,
};
export default Restaurant;
