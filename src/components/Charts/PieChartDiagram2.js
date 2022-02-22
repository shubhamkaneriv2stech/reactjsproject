import React from "react";
import Data from "../../data/line_Chart_Data.json";
import { ResponsiveContainer, Tooltip, PieChart, Pie } from "recharts";

const PieChartDiagram2 = () => {
  return (
    <div className=" justify-content-center align-items-center">
      <ResponsiveContainer width="100%" aspect={2}>
        <PieChart width={730} height={150}>
          <Pie
            dataKey="fees"
            isAnimationActive={true}
            cx="50%"
            cy={350}
            outerRadius={220}
            fill="green"
            label
            data={Data}
            nameKey="name"
          />
          <Pie
            data={Data}
            dataKey="student"
            cx="50%"
            cy={350}
            innerRadius={270}
            outerRadius={320}
            fill="red"
            nameKey="name"
            label
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

export default PieChartDiagram2;
