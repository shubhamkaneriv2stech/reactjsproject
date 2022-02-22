import React, { useState, useEffect } from "react";
import { Card, ListGroup, Image, Row, Col, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
const User = (props) => {
  const [user, setUser] = useState({
    employment: {},
    address: {},
    subscription: {},
  });
  const { id } = useParams();
  console.log(id);

  const obj = props.location.myCustomProps;
  console.log(obj);
  console.log(props);

  useEffect(() => {
    setUser(props.location.myCustomProps);
  }, [props.location.myCustomProps]);

  // useEffect(() => {
  //     loadUser();
  // }, []);
  // const loadUser = () => {
  //     const updateList = TableData.find((e) => {
  //         return e.id === parseInt(id);
  //     });
  //     setUser(updateList);
  // };

  console.log(user);

  return (
    <Container fluid>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{
          marginBottom: "30px",
          paddingLeft: "11px",
          marginTop: "15px",
        }}
      >
        <Link to="/table" style={{ textDecoration: "none" }}>
          Table
        </Link>
        <Typography color="textPrimary">{user.username}</Typography>
      </Breadcrumbs>

      <div className="d-flex">
        <Card
          style={{
            width: "728px",
            marginLeft: "13px",
            backgroundColor: "rgb(245, 240, 240)",
          }}
        >
          <Image
            src={user.avatar}
            roundedCircle
            width="150"
            style={{ marginLeft: "278px" }}
          />
          <Card.Body>
            <Card.Title className="text-center">{user.username}</Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              {user.employment.title}
            </Card.Text>
            <Card.Text style={{ textAlign: "center" }}>
              {user.employment.key_skill}
            </Card.Text>
            <div className="d-flex ">
              <EmailIcon style={{ marginRight: "10px" }} />
              {user.email}
            </div>
            <hr />
            <div className="d-flex  ">
              <LocationOnIcon style={{ marginRight: "10px" }} />
              {user.address.country}
            </div>
            <hr />
            <div className="d-flex  ">
              <PhoneIcon style={{ marginRight: "10px" }} />
              {user.phone_number}
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "728px",
            marginLeft: "33px",
          }}
        >
          <ListGroup variant="flush">
            <h3 style={{ padding: "15px", paddingLeft: "15px" }}>
              Personal Details
            </h3>

            <ListGroup.Item
              style={{
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    First name
                  </span>
                </Col>
                <Col md={7}>
                  <span>{user.first_name}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Last name
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.last_name}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    DOB
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.date_of_birth}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Insurance Number
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.social_insurance_number}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Gender
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.gender}</span>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <br />

      <div className="d-flex">
        <Card
          style={{
            width: "728px",
            marginLeft: "13px",
          }}
        >
          <ListGroup variant="flush">
            <div style={{ textAlign: "left" }}>
              <h3 style={{ padding: "15px", paddingLeft: "15px" }}>
                Address Details
              </h3>
            </div>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    City name
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.address.city}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Street name
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.address.street_name}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Street address
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.address.street_address}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Zip code
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.address.zip_code}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    State
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.address.state}</span>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>

        <Card
          style={{
            width: "728px",
            marginLeft: "33px",
          }}
        >
          <ListGroup variant="flush">
            <h3 style={{ padding: "15px", paddingLeft: "15px" }}>
              Subcription Details
            </h3>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Plan
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.subscription.plan}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              ></span>

              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Staus
                  </span>
                </Col>
                <Col md={7}>
                  <>
                    {user.subscription.status === "Idle" ? (
                      <span
                        className="text-primary"
                        style={{
                          textAlign: "right",
                        }}
                      >
                        <strong>{user.subscription.status}</strong>
                      </span>
                    ) : null}
                    {user.subscription.status === "Blocked" ? (
                      <span
                        className="text-danger"
                        style={{
                          textAlign: "right",
                        }}
                      >
                        <strong>{user.subscription.status}</strong>
                      </span>
                    ) : null}
                    {user.subscription.status === "Active" ? (
                      <span
                        className="text-success"
                        style={{
                          textAlign: "right",
                        }}
                      >
                        <strong>{user.subscription.status}</strong>
                      </span>
                    ) : null}
                    {user.subscription.status === "Pending" ? (
                      <span
                        className="text-warning "
                        style={{
                          textAlign: "right",
                        }}
                      >
                        <strong>{user.subscription.status}</strong>
                      </span>
                    ) : null}
                  </>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Payment method
                  </span>
                </Col>
                <Col md={7}>
                  <span>{user.subscription.payment_method}</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <Row>
                <Col md={5}>
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Term
                  </span>
                </Col>
                <Col md={7}>
                  <span> {user.subscription.term}</span>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </Container>
  );
};

//Checking PropTypes In Login Component
User.propTypes = {
  props: PropTypes.object,
};

export default User;
