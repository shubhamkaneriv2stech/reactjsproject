import React from "react";
import { Container } from "react-bootstrap";
import AreaChartDiagram from "./AreaChartDiagram";
import BarChartDiagram from "./BarChartDiagram";

import LineChartDiagram from "./LineChartDiagram";
import PieChartDiagram from "./PieChartDiagram";
import StopIcon from "@material-ui/icons/Stop";
import SingleBarChartDiagram from "./SingleBarChartDiagram";
import SimpleAreaChart from "./SimpleAreaChart";
import PieChartDiagram2 from "./PieChartDiagram2";
import SimpleLineChart from "./SimpleLineChart";

const Charts = () => {
  return (
    <>
      <Container
        fluid
        style={{
          padding: "1.5%",
          paddingTop: "0%",
          paddingBottom: "3%",
        }}
      >
        <div>
          <h5 className="mb-3">Charts In React Js </h5>
        </div>
        <div className="text-center text-primary" style={{ fontSize: "48px" }}>
          Simple Line Chart
        </div>

        <div>
          <SimpleLineChart />
        </div>
        <hr />
        <div className="text-center text-primary" style={{ fontSize: "48px" }}>
          Mixed Line Chart
        </div>

        <div>
          <LineChartDiagram />
        </div>
        <hr />
        <div className="text-center text-primary" style={{ fontSize: "48px" }}>
          Simple Area Chart
        </div>
        <div>
          <SimpleAreaChart />
        </div>
        <hr />
        <div className="text-center text-primary" style={{ fontSize: "48px" }}>
          Area Chart
        </div>
        <div>
          <AreaChartDiagram />
        </div>
        <hr />
        <div className="text-center text-primary" style={{ fontSize: "48px" }}>
          Bar Chart Single bar
        </div>
        <div>
          <SingleBarChartDiagram />
        </div>
        <hr />
        <div className="text-center text-primary" style={{ fontSize: "48px" }}>
          Bar Chart Double bar
        </div>
        <div>
          <BarChartDiagram />
        </div>
        <hr />
        <div className="text-center text-primary" style={{ fontSize: "48px" }}>
          Simple Pie Chart
        </div>
        <div>
          <div className="text-center ">
            <span style={{ marginLeft: "256px" }}>
              <StopIcon style={{ color: "red" }} />
              No of Student's attending programming languages
            </span>
            <br />

            <span style={{ marginLeft: "120px" }}>
              <StopIcon style={{ color: "green" }} />
              Fees of programming languages
            </span>
          </div>

          <div>
            <PieChartDiagram />
          </div>
        </div>
        <hr />
        <div className="text-center text-primary" style={{ fontSize: "48px" }}>
          Mixed Pie Chart
        </div>
        <div>
          <div className="text-center ">
            <span style={{ marginLeft: "256px" }}>
              <StopIcon style={{ color: "red" }} />
              No of Student's attending programming languages
            </span>
            <br />

            <span style={{ marginLeft: "120px" }}>
              <StopIcon style={{ color: "green" }} />
              Fees of programming languages
            </span>
          </div>

          <div>
            <PieChartDiagram2 />
          </div>
        </div>
      </Container>
    </>
  );
};
export default Charts;
