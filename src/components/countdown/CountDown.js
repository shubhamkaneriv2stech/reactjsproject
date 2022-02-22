import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
const CountDown = () => {
  const myState = useSelector((state) => state.reducer);
  // console.log(myState);
  const dispatch = useDispatch();

  const secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  };

  let time;
  const startTimer = () => {
    if (myState.seconds >= 0) {
      time = setInterval(countDown, 1000);
    }
  };

  const countDown = () => {
    if (myState.seconds === 0) {
      clearInterval(time);
      return onCountDownAtZero();
    }
    return onCountDown(secondsToTime);
  };
  const onCountDown = (fn) => dispatch({ type: "START", secToTime: fn });
  const onCountDownAtZero = () => dispatch({ type: "STOP" });
  const incTimer = () => {
    if (myState.seconds >= 0) return onIncrement(secondsToTime);
  };

  const onIncrement = (fn) => dispatch({ type: "INCREMENT", secToTime: fn });

  const decTimer = () => {
    if (myState.seconds > 61) return onDecrement(secondsToTime);
  };

  const stopTimer = () => {
    console.log(time, " timer");
    if (myState.seconds !== 0) {
      clearInterval(time);
    }
  };

  const onDecrement = (fn) => dispatch({ type: "DECREMENT", secToTime: fn });
  const timeFormatter = (myState) => {
    console.log(myState.time.h);

    if (myState.time.h.toString().length < 2)
      myState.time.h = `0${myState.time.h}`;

    if (myState.time.m.toString().length < 2)
      myState.time.m = `0${myState.time.m}`;

    if (myState.time.s.toString().length < 2)
      myState.time.s = `0${myState.time.s}`;

    return (
      <span>
        {myState.time.h}:{myState.time.m}:{myState.time.s}
      </span>
    );
  };
  return (
    <Container fluid style={{ padding: "0px 25px" }}>
      <Row
        style={{
          justifyContent: "space-between",
          padding: "15px 0px ",
          alignItems: "center",
        }}
      >
        <Col xs={4}>
          <h5>CountDown App</h5>
        </Col>
      </Row>

      <Container>
        <div className="container mt-4  justify-content-center">
          <div className="mx-auto justify-content-center  text-center">
            {timeFormatter(myState)}
          </div>
          <div className="mt-3 text-center ">
            <Button className="m-2" variant="info" onClick={() => incTimer()}>
              +
            </Button>

            <Button
              className="m-2"
              variant="primary"
              onClick={() => startTimer()}
            >
              Start
            </Button>
            <Button
              className="m-2"
              variant="danger"
              onClick={() => stopTimer()}
            >
              Stop
            </Button>
            {/* <Button className="m-2" variant="success">
              Lap
            </Button>
            <Button className="m-2" variant="warning">
              Reset
            </Button> */}
            <Button className="m-2" variant="info" onClick={() => decTimer()}>
              -
            </Button>
          </div>
        </div>
        <div className="container"></div>
      </Container>
    </Container>
  );
};

export default CountDown;
