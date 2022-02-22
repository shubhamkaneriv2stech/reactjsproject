import React, { useState, Fragment, useEffect } from "react";
import List from "../List/List";
import Profile from "../Profile/Profile";
import img from "../img/img.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import "../../stylesheet/DashBoard.css";
import { LOGOUT } from "../countdown/types/Types";
import Todo from "../Todo/Todo";
import PassingData from "../ReusableTable/PassingData";
import TodoContextReducer from "../ContextReducer/TodoContextReducer";
import { fetchWeatherApiData } from "../countdown/Actions/weatherapiindex";
import { fetchPostsApiData } from "../countdown/Actions/postManagementindex";
import { useDispatch } from "react-redux";
import Topbar from "../Topbar/Topbar";
import SideBar from "../Sidebar/SideBar";
import User from "../Table/User";
import Restaurant from "../List/Restaurant";
import BasicTable from "../ReactTable/BasicTable";
import Login from "../Login/Login";
import { GlobalProvider } from "../ContextReducer/GlobalState";
import UserTable from "../Table/UserTable";
import CountDown from "../countdown/CountDown";
import NewWeatherApi from "../weatherapi/NewWeatherApi";
import NewPost from "../PostsManagement/NewPost";
import FormValidation from "../FormValidation/FormValidation";
import Charts from "../Charts/Charts";
import CombineExample from "../UseMemoAndUseCallBack/CombineExample";

const Approuter = () => {
  const dispatch = useDispatch();

  //State For UserLogging Or NotLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //Login Success Function
  const onLoginSuccess = () => {
    setIsLoggedIn(true);
    dispatch(fetchWeatherApiData());
    dispatch(fetchPostsApiData());
  };
  //LogoutSuccess Function
  const onLogoutSuccess = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    dispatch({ type: LOGOUT });
  };
  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // After Successful login or not Successful login  Returning Router Part
  return (
    <Fragment>
      {!isLoggedIn ? (
        <Router>
          <Switch>
            <Login onLoginSuccess={onLoginSuccess} />
          </Switch>
        </Router>
      ) : (
        <Fragment>
          {
            //   { dispatch(fetchWeatherApiData())}
            // {dispatch(fetchPostsApiData())}
          }

          <Router>
            <GlobalProvider>
              <SideBar img={img} />
              <Topbar logout={onLogoutSuccess} />
              <Switch>
                <Route exact path="/" component={Profile} />
                <Route exact path="/list" component={List} />
                <Route exact path="/list/:id" component={Restaurant} />
                <Route exact path="/table" component={UserTable} />
                <Route exact path="/table/:id" component={User} />
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/todo/:id" component={Todo} />
                <Route exact path="/commonTable" component={PassingData} />
                <Route
                  exact
                  path="/TodoAppContext"
                  component={TodoContextReducer}
                />
                <Route exact path="/reactTable" component={BasicTable} />
                <Route exact path="/weatherapi" component={NewWeatherApi} />
                <Route exact path="/PostsTable" component={NewPost} />
                <Route exact path="/countDown" component={CountDown} />
                <Route
                  exact
                  path="/formValidation"
                  component={FormValidation}
                />
                <Route exact path="/charts" component={Charts} />
                <Route
                  exact
                  path="/UseMemoAndUseCallback"
                  component={CombineExample}
                />
              </Switch>
            </GlobalProvider>
          </Router>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Approuter;
