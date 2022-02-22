import React, { useState, useMemo } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const UseMemoEXample = () => {
  const [number, setNumber] = useState(0);
  // function to square the value
  const squareNum = (inputNumber) => {
    console.log("Squaring will be done!", Math.pow(inputNumber, 2));
    return Math.pow(inputNumber, 2);
  };
  // Using useMemo Hook
  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]);
  const [counter, setCounter] = useState(0);

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  };

  return (
    <div className=" justify-content-center align-items-center">
      <Form>
        <Row>
          <Col sm={{ span: 4, offset: 4 }}>
            <Form.Label>Enter Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter a number"
              value={number}
              onChange={onChangeHandler}
            />
          </Col>
        </Row>
      </Form>

      <div className="text-center mt-3">OUTPUT: {squaredNum}</div>
      <div className="text-center mt-3">Counter : {counter}</div>
      <div className="text-center mt-3">
        <Button
          type="button"
          className="btn btn-primary"
          onClick={counterHander}
        >
          Counter ++
        </Button>
      </div>
    </div>
  );
};

export default UseMemoEXample;
