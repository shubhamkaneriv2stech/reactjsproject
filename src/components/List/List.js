import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CardRs from "./CardRs";
import Pagination from "../common/Pagination";
import restaurantData from "../../data/restaurant_data.json";

import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Fragment } from "react";

//Restuarant List Component
const List = () => {
  //Initial State of List Current page and page Size
  const [state, setState] = useState({
    currentPage: 1,
    pageSize: 6,
  });

  //Intializing Restuarant Data
  const [searchValue, setSearchValue] = useState(restaurantData);

  //initial value of search field Input Value
  const inputRef = useRef(null);

  //Handling Pagination button
  const handleClick = (e) => {
    setState({
      currentPage: Number(e.target.id),
      pageSize: 6,
    });
  };

  //Setting Loader for List Component
  const [loader, setLoader] = useState(true);

  //Setting Time out For Loader
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  //Search Function Used for Searching the Restuarant name From List
  const search = () => {
    console.log(inputRef.current.value);
    const searchTerm = inputRef.current.value.toLowerCase();
    setState({
      currentPage: 1,
      pageSize: 6,
    });
    const value = restaurantData.filter(function (e) {
      return e.name.toLowerCase().includes(searchTerm);
    });
    setSearchValue(value);
  };

  //Calculationg Last Index of List items For per Page
  let indexOfLastTodo = state.currentPage * state.pageSize;
  //Calculationg First Index of List items For per Page
  let indexOfFirstTodo = indexOfLastTodo - state.pageSize;
  //Slices list between first and last items for the current page
  let currentPosts = searchValue.slice(indexOfFirstTodo, indexOfLastTodo);
  //Returning the Statement
  return (
    <div>
      {loader ? (
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
      ) : (
        <Fragment>
          <Container fluid>
            <Row
              style={{
                justifyContent: "space-between",
                margin: "20px 0px 20px 0px",
                alignItems: "center",
              }}
            >
              <Col xs={4}>
                <h5>Restaurant List</h5>
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
            <Row style={{ padding: "6px" }}>
              {/* Mapping the Restaurant list */}
              {currentPosts.length > 0 ? (
                currentPosts.map((val) => {
                  return <CardRs details={val} key={val.id} />;
                })
              ) : (
                <div style={{ textAlign: "center" }}>
                  <h3>
                    No data Found this
                    <strong style={{ color: "red" }}>
                      {inputRef.current.value}
                    </strong>
                  </h3>
                </div>
              )}
            </Row>

            <Row>
              <div className="d-flex justify-content-end">
                {/*Commom pagination Component */}
                <Pagination
                  currentPage={state.currentPage}
                  handleClick={handleClick}
                  data={searchValue}
                  pageSize={state.pageSize}
                />
              </div>
            </Row>
          </Container>
        </Fragment>
      )}
    </div>
  );
};

export default List;
