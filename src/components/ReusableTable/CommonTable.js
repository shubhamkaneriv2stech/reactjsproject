import React from "react";
import PropTypes from "prop-types";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const CommonTable = ({ data, columns, title, styelName, toolTip }) => {
    // console.log(data);
    // console.log(columns);
    return (
        <div style={{ padding: "0px 28px 0px" }}>
            <h5>{title}</h5>
            <table className="table table-bordered table-hover table-responsive ">
                <thead className="thead-dark">
                    <tr>
                        {columns.map((col) => {
                            return (
                                <th
                                    style={{
                                        width: col.width,
                                        fontSize: "14px",
                                    }}
                                >
                                    {col.title}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((rowsItem, i) => {
                        return (
                            <tr>
                                {columns.map((col, i) => {
                                    return (
                                        <td>
                                            {toolTip ? (
                                                <OverlayTrigger
                                                    placement="top"
                                                    delay={{
                                                        show: 250,
                                                        hide: 400,
                                                    }}
                                                    overlay={(props) => (
                                                        <Tooltip
                                                            id="button-tooltip"
                                                            {...props}
                                                        >
                                                            {
                                                                rowsItem[
                                                                    col
                                                                        .dataIndex
                                                                ]
                                                            }
                                                        </Tooltip>
                                                    )}
                                                >
                                                    <div className="ellipsis_class">
                                                        <p>
                                                            {
                                                                rowsItem[
                                                                    col
                                                                        .dataIndex
                                                                ]
                                                            }
                                                        </p>
                                                    </div>
                                                </OverlayTrigger>
                                            ) : (
                                                <div className={styelName}>
                                                    {rowsItem[col.dataIndex]}
                                                </div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

//Checking PropTypes In Login Component
CommonTable.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
};

export default CommonTable;
