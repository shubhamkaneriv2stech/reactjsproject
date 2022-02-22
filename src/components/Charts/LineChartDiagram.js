import React from "react";
import pdata from "../../data/line_Chart_Data.json";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  Label,
} from "recharts";
const LineChartDiagram = () => {
  return (
    // <ResponsiveContainer width="100%" height={600}>
    //   <LineChart
    //     data={Data}
    //     width={500}
    //     height={800}
    //     margin={{ top: 15, right: 8, bottom: 2 }}
    //   >
    //     <CartesianGrid strokeDasharray="5 5" />
    //     <XAxis dataKey="name">
    //       <Label value="Programming Lang" position="insideBottom" />
    //     </XAxis>
    //     <YAxis
    //       tickCount={9}
    //       label={{
    //         value: "student and fees data",
    //         angle: -90,
    //         position: "insideLeft",
    //       }}
    //     />
    //     <Tooltip contentStyle={{ backgroundColor: "yellow" }} />
    //     <Legend verticalAlign="bottom" height={620} />
    //     <Line dataKey="student" stroke="red" activeDot={{ r: 8 }} />
    //     <Line
    //       type="monotone"
    //       dataKey="fees"
    //       stroke="green"
    //       activeDot={{ r: 8 }}
    //     />
    //   </LineChart>
    // </ResponsiveContainer>

    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart
        data={pdata}
        width={500}
        height={800}
        margin={{ top: 15, right: 8, bottom: 20 }}
      >
        <CartesianGrid
          strokeDasharray="5 5"
          // horizontal={false}
          // vertical={false}
        />

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
        <Tooltip
          //contentStyle={{ backgroundColor: "yellow" }}
          wrapperStyle={{ color: "#17a2b8" }}
        />
        <Legend verticalAlign="top" />
        <Line
          type="monotone"
          dataKey="student"
          stroke="red"
          activeDot={{ r: 8 }}
        />
        <Line dataKey="fees" stroke="green" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartDiagram;
