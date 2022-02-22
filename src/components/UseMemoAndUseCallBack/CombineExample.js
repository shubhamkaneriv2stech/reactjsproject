import React from "react";
import { Container } from "react-bootstrap";
import UseCallBackExample from "./UseCallBackExample";
import UseMemoEXample from "./UseMemoEXample";

const CombineExample = () => {
  return (
    <Container
      fluid
      style={{
        padding: "1.5%",
        paddingTop: "0%",
        paddingBottom: "3%",
      }}
    >
      <div>
        <h5 className="mb-3">UseMemo Example</h5>
      </div>
      <UseMemoEXample />
      <hr />
      <div>
        <h5 className="mb-3">UseCallBack Example</h5>
      </div>
      <UseCallBackExample />
    </Container>
  );
};

export default CombineExample;
