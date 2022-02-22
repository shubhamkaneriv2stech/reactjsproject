import React from "react";
import pdata from "../../data/line_Chart_Data.json";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Label,
  Bar,
  BarChart,
} from "recharts";
const SingleBarChartDiagram = () => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={730}
          height={250}
          data={pdata}
          margin={{ top: 15, right: 8, bottom: 20 }}
          barSize={40}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={"preserveStartEnd"}
            scale="point"
            padding={{ left: 40, right: 40 }}
          >
            <Label value="Programming Languages" position="bottom" offset={0} />
          </XAxis>
          <YAxis
            tickCount={9}
            label={{
              value: "student  data",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip wrapperStyle={{ color: "#17a2b8" }} />
          <Legend verticalAlign="top" />
          <Bar dataKey="fees" fill="green" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default SingleBarChartDiagram;
