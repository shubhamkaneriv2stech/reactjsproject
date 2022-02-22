import React, { useState, useRef } from "react";
import Data from "../../data/userTable_data.json";
import TableView from "./TableView";

import { Row, Col, Container, Table } from "react-bootstrap";
import Pagination from "../common/Pagination";
import SearchIcon from "@material-ui/icons/Search";
const UserTable = () => {
    console.log(Data);
    console.log("in The Table Component");
    const [statedata, setState] = useState({
        currentPage: 1,
        pageSize: 5,
    });
    const inputRef = useRef("");

    const [searchDataOrDefaultData, setSearchDataOrDefaultData] =
        useState(Data);

    const handleClick = (e) => {
        setState({
            currentPage: Number(e.target.id),
            pageSize: 5,
        });
    };

    const search = (e) => {
        const searchTerm = inputRef.current.value.toLowerCase();
        setState({
            currentPage: 1,
            pageSize: 5,
        });
        const value = Data.filter(function (e) {
            return e.first_name.toLowerCase().includes(searchTerm);
        });
        setSearchDataOrDefaultData(value);
    };
    let indexOfLastTodo = statedata.currentPage * statedata.pageSize;
    let indexOfFirstTodo = indexOfLastTodo - statedata.pageSize;
    let currentPosts = searchDataOrDefaultData.slice(
        indexOfFirstTodo,
        indexOfLastTodo
    );

    let id = indexOfFirstTodo;

    return (
        <Container fluid style={{ padding: "0px 25px" }}>
            <Row
                style={{
                    justifyContent: "space-between",
                    padding: "20px 0px",
                    alignItems: "center",
                }}
            >
                <Col xs={4}>
                    <h5>User list v1</h5>
                </Col>
                <Col xs={4}>
                    <div className="search_bar">
                        <input
                            type="text"
                            id="inlineFormInput"
                            placeholder="Search By Name "
                            ref={inputRef}
                            onChange={search}
                        />
                        <SearchIcon />
                    </div>
                </Col>
            </Row>
            <Table striped bordered hover responsive>
                <thead variant="dark">
                    <tr>
                        {/* <th
                                style={{
                                    fontSize: "12px",
                                     textAlign: "left",
                                }}
                                rowSpan="2"
                            >
                                Sr
                            </th> */}
                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                            }}
                            rowSpan="2"
                        >
                            Full name
                        </th>
                        {/* <th
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                            }}
                            rowSpan="2"
                        >
                            Full name
                        </th>
                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                            }}
                            rowSpan="2"
                        >
                            Full name
                        </th> */}

                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                            }}
                            rowSpan="2"
                        >
                            User name
                        </th>

                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                            }}
                            rowSpan="2"
                        >
                            Date of birth
                        </th>
                        <th
                            style={{
                                textAlign: "center",
                                fontSize: "12px",
                            }}
                            colSpan="4"
                        >
                            Address
                        </th>
                        <th
                            style={{
                                textAlign: "center",
                                fontSize: "12px",
                            }}
                            colSpan="2"
                        >
                            Subcription
                        </th>
                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "center",
                            }}
                            rowSpan="2"
                        >
                            View
                        </th>
                    </tr>
                    <tr>
                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                            }}
                        >
                            Street name
                        </th>
                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                            }}
                        >
                            City
                        </th>

                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                            }}
                        >
                            State
                        </th>
                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                            }}
                        >
                            Country
                        </th>
                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "left",
                            }}
                        >
                            Plan
                        </th>
                        <th
                            style={{
                                fontSize: "12px",
                                textAlign: "center",
                            }}
                        >
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {currentPosts.length > 0 ? (
                            currentPosts.map((val) => {
                                console.log(val.subscription.status);
                                id++;
                                let color;
                                if (val.subscription.status === "Idle")
                                    color = "text-primary";
                                else if (val.subscription.status === "Pending")
                                    color = "text-warning";
                                else if (val.subscription.status === "Blocked")
                                    color = "text-danger";
                                else if (val.subscription.status === "Active")
                                    color = "text-success";
                                return (
                                    <TableView
                                        details={val}
                                        id={id}
                                        color={color}
                                    />
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="8">
                                    ...No Data Found This !
                                    <strong style={{ color: "red" }}>
                                        {inputRef.current.value === ""
                                            ? "dfdf"
                                            : inputRef.current.value}
                                    </strong>
                                </td>
                            </tr>
                        )}
                    </>
                </tbody>
            </Table>

            <div className="d-flex align-items-center justify-content-between ">
                <div>
                    Page <strong>{statedata.currentPage} </strong>of{" "}
                    <strong>
                        {Math.ceil(
                            searchDataOrDefaultData.length / statedata.pageSize
                        )}
                    </strong>
                </div>
                <div>
                    <Pagination
                        currentPage={statedata.currentPage}
                        handleClick={handleClick}
                        data={searchDataOrDefaultData}
                        pageSize={statedata.pageSize}
                        currentPosts={currentPosts}
                    />
                </div>
            </div>
        </Container>
    );
};

export default UserTable;
