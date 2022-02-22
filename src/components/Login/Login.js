import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import applicationLogo from "../img/logo.png";
import { fetchWeatherApiData } from "../countdown/Actions/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import VariableCity from "../GlobalConstants/VariableCity";
const Login = ({ onLoginSuccess }) => {
  //used HisTory hook for the getting route data
  let history = useHistory();

  //UserList With login And Password
  let usersList = [
    {
      username: "user1",
      password: "abc123",
      uId: "1",
    },
    {
      username: "user2",
      password: "pass123",
      uId: "2",
    },
    {
      username: "user3",
      password: "pass123",
      uId: "3",
    },
  ];
  //Show Error Messages While Login
  const [errMsg, seterrMsg] = useState({
    msg: "",
    color: "",
  });

  //Intial State of the UserDetails
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  //handling function for the input field and their values
  const handler = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  // const weatherApiData = useSelector((state) => state.weatherApiReducer);
  // console.log(weatherApiData, " api calling");

  // const dispatch = useDispatch();

  // useEffect(() => {
  //      dispatch(fetchWeatherApiData());
  // }, [])
  //States used validation login Credentials
  const [validated, setValidated] = useState(false);

  //Login Submit Handler Function
  const submitHandler = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    const users = usersList.find(
      (items) =>
        items.username === userDetails.username &&
        items.password === userDetails.password
    );
    console.log("user", users);
    if (form.checkValidity() === false) {
      setValidated(true);
    } else if (users) {
      localStorage.setItem("token", users);
      onLoginSuccess();
      history.push("/");
      setValidated(false);
    } else {
      setValidated(false);
      seterrMsg({
        msg: " Invalid login Credentials",
        color: "text-danger",
      });
    }
  };

  //Returning  When Login Component Called
  return (
    <Container style={{ marginLeft: "300px", marginTop: "120px" }}>
      <Row style={{ paddingRight: "208px" }}>
        <Col md={8} sm={12} lg={7}>
          <Card
            style={{
              borderRadius: "0.25rem",
              border: "1px solid #007bff",
            }}
          >
            <Card.Body
              style={{
                backgroundColor: "#007bff",
                color: "white",
              }}
            >
              <div className="text-center">
                <Card.Img
                  variant="top"
                  src={applicationLogo}
                  style={{
                    width: "140px",
                  }}
                />
              </div>

              <Form noValidate validated={validated} onSubmit={submitHandler}>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    id="userName"
                    type="text"
                    name="username"
                    value={userDetails.username}
                    onChange={handler}
                    required
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{
                      textAlign: "left",
                      marginBottom: 8,
                    }}
                  >
                    <strong> Username is required</strong>
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    name="password"
                    value={userDetails.password}
                    onChange={handler}
                    required
                  />
                  <Form.Control.Feedback
                    type="invalid"
                    style={{
                      textAlign: "left",
                      marginBottom: 8,
                    }}
                  >
                    <strong> Password is required</strong>
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <Button
                  style={{ marginLeft: "40%" }}
                  className="btn btn-sm btn-success text-uppercase"
                  type="submit"
                >
                  Sign in
                </Button>
                <strong
                  className={`d-flex justify-content-center ${errMsg.color} `}
                >
                  {errMsg.msg}
                </strong>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

//Checking PropTypes In Login Component
Login.propTypes = {
  onLoginSuccess: PropTypes.func,
};

export default Login;
