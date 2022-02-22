import { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import CommonReactTable from "../common/CommonReactTable";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { SubRowsColumns } from "./SubRowsColumns";
import { Fragment } from "react";
const SubTable = () => {
  const postsApiData = useSelector((state) => state.subRowspostsApiReducer);

  console.log(postsApiData, " api calling");

  // State For the Loader Part
  const [loader, setLoader] = useState(true);

  return (
    <Fragment>
      {loader ? (
        <Fragment>
          <div
            style={{
              padding: "200px",
              color: "red",
              textAlign: "center",
            }}
          >
            <CircularProgress color="secondary" />
            <h1>Loading Data Please wait...</h1>
          </div>
          <div style={{ visibility: "hidden" }}>
            {setTimeout(() => {
              setLoader(false);
            }, 1000)}
          </div>
        </Fragment>
      ) : (
        <CommonReactTable data={postsApiData} columns={SubRowsColumns} />
      )}
    </Fragment>
  );
};

export default SubTable;

// PropTypes For the SubTable Component
SubTable.propTypes = {
  subRowsColumns: PropTypes.array,
  row: PropTypes.object,
};
