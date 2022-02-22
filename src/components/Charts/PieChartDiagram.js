import React from "react";
import Data from "../../data/line_Chart_Data.json";
import { ResponsiveContainer, Tooltip, PieChart, Pie } from "recharts";

const PieChartDiagram = () => {
  return (
    <div className=" justify-content-center align-items-center">
      <ResponsiveContainer width="100%" aspect={2}>
        <PieChart width={630} height={100}>
          <Pie
            dataKey="fees"
            isAnimationActive={true}
            cx="30%"
            cy={350}
            outerRadius={220}
            fill="green"
            label
            data={Data}
            nameKey="name"
          />
          <Pie
            dataKey="student"
            isAnimationActive={true}
            cx="70%"
            cy={350}
            outerRadius={220}
            fill="red"
            data={Data}
            nameKey="name"
          />

          <Tooltip
            itemStyle={{ color: "#17a2b8" }}
            wrapperStyle={{ color: "#17a2b8" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartDiagram;
