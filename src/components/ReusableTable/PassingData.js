import React from "react";
import CommonTable from "./CommonTable";
import col from "./HeaderAndColumnArray";

import data from "../../data/userTable_data.json";
const PassingData = () => {
  return <CommonTable data={data} columns={col} title={"Common table"} />;
};

export default PassingData;
