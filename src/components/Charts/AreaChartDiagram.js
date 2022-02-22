import React from "react";
import Data from "../../data/line_Chart_Data.json";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Label,
  AreaChart,
  Area,
} from "recharts";
const AreaChartDiagram = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <AreaChart
        width={500}
        height={800}
        data={Data}
        margin={{ top: 15, right: 8, bottom: 20 }}
      >
        <defs>
          <linearGradient id="student" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="red" stopOpacity={0.8} />
            <stop offset="95%" stopColor="red" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="fees" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="green" stopOpacity={0.8} />
            <stop offset="95%" stopColor="green" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" interval={"preserveStartEnd"}>
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
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip wrapperStyle={{ color: "#17a2b8" }} />
        <Legend verticalAlign="top" />
        <Area
          type="monotone"
          dataKey="student"
          stroke="red"
          fillOpacity={1}
          fill="url(#student)"
          activeDot={{ r: 8 }}
        />
        <Area
          type="monotone"
          dataKey="fees"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#fees)"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartDiagram;
