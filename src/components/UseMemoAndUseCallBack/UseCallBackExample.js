import React, { useState, useCallback } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const UseCallBackExample = () => {
  const [numbers, setNumbers] = useState({ num1: 0, num2: 0 });
  const [result, setResult] = useState(0);

  const memoizedCallback = useCallback(() => {
    setResult(numbers.num1 + numbers.num2);
    setNumbers({ num1: 0, num2: 0 });
    console.log(result);
  }, [numbers, result]);

  return (
    <div className=" justify-content-center align-items-center">
      <div className="text-center mt-3"> {result}</div>
      <Form>
        <Row>
          <Col sm={{ span: 4, offset: 4 }}>
            <Form.Label>Enter Number 1</Form.Label>
            <Form.Control
              placeholder="Enter a number"
              type="text"
              onChange={(e) =>
                setNumbers({ num1: +e.target.value, num2: numbers.num2 })
              }
              value={numbers.num1}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 4, offset: 4 }}>
            <Form.Label>Enter Number 2</Form.Label>
            <Form.Control
              placeholder="Enter a number"
              type="text"
              onChange={(e) =>
                setNumbers({ num1: numbers.num1, num2: +e.target.value })
              }
              value={numbers.num2}
            />
          </Col>
        </Row>
      </Form>

      <div className="text-center mt-3">
        <Button onClick={memoizedCallback}>Add</Button>
      </div>
    </div>
  );
};

export default UseCallBackExample;
