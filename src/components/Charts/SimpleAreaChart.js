import React from "react";
import Data from "../../data/line_Chart_Data.json";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Label,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
const SimpleAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <AreaChart
        width={500}
        height={800}
        data={Data}
        margin={{ top: 15, right: 8, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" interval={"preserveStartEnd"}>
          <Label value="Programming Languages" position="bottom" offset={0} />
        </XAxis>
        <YAxis
          tickCount={7}
          label={{
            value: "student  data",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip wrapperStyle={{ color: "#17a2b8" }} />
        <Legend verticalAlign="top" />
        <Area
          type="monotone"
          dataKey="student"
          stroke="red"
          fill="red"
          fillOpacity={0.1}
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SimpleAreaChart;
