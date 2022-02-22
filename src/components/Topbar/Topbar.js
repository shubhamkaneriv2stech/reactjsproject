import React from "react";

import { Col, Container, Row } from "react-bootstrap";
const Topbar = ({ logout }) => {
    return (
        <Container fluid>
            <Row>
                <Col sm={12} lg={12} xs={12}>
                    <nav
                        className="navbar  justify-content-between"
                        style={{
                            right: 0,
                            left: 0,
                            position: "absolute",
                            top: 0,
                            padding: " 3px 0px 4px 292px",
                            backgroundColor: "#007bff",
                            zIndex: 1,
                        }}
                    >
                        <span
                            className="navbar-brand"
                            style={{ paddingLeft: "32px" }}
                        >
                            Dashboard
                        </span>
                        <button
                            className="btn btn-danger"
                            onClick={logout}
                            style={{ marginRight: "20px" }}
                        >
                            Logout
                        </button>

                        {/* <Link
                            to={{
                                pathname: `/list/${details.id}`,
                                myCustomProps: details,
                            }}
                        >
                            Read More
                        </Link> */}
                    </nav>
                </Col>
            </Row>
        </Container>
    );
};

export default Topbar;
