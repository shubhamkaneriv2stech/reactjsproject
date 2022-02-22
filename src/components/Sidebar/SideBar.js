import React, { useState, useEffect, useContext } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListIcon from "@material-ui/icons/List";
import TableChartIcon from "@material-ui/icons/TableChart";
import AppsIcon from "@material-ui/icons/Apps";
import TimerIcon from "@material-ui/icons/Timer";
import { Link } from "react-router-dom";
import { GlobalContext } from "../ContextReducer/GlobalState";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import PropTypes from "prop-types";
import AssessmentIcon from "@material-ui/icons/Assessment";
const SideBar = ({ img }) => {
  const { todo } = useContext(GlobalContext);
  const [menu] = useState({
    list: [
      {
        id: "profile",
        value: "Profile",
        url: "/profile",
        icon: <AccountCircleIcon />,
      },
      {
        value: "Restaurant grid view",
        id: "list",
        url: "/list",
        icon: <ListIcon />,
      },
      {
        value: "To do app v1",
        id: "todo",
        url: "/todo",
        icon: <AppsIcon />,
      },
      {
        value: "To do app v2",
        id: "TodoAppContext",
        url: "/TodoAppContext",
        icon: <AppsIcon />,
      },
      {
        value: "User list v1",
        id: "table",
        url: "/table",
        icon: <TableChartIcon />,
      },

      {
        value: "User list v2",
        id: "reactTable",
        url: "/reactTable",
        icon: <TableChartIcon />,
      },

      {
        value: "Weather Api",
        id: "api",
        url: "/weatherapi",
        icon: <WbSunnyIcon />,
      },
      {
        value: "Common Table",
        id: "ReTable",
        url: "/commonTable",
        icon: <TableChartIcon />,
      },
      {
        value: "Posts Management Table",
        id: "Posts",
        url: "/PostsTable",
        icon: <TableChartIcon />,
      },
      {
        value: "Count down",
        id: "countDown",
        url: "/countDown",
        icon: <TimerIcon />,
      },
      {
        value: "FormValidation",
        id: "formValidation",
        url: "/formValidation",
        icon: <AppsIcon />,
      },
      {
        value: "Charts",
        id: "charts",
        url: "/charts",
        icon: <AssessmentIcon />,
      },

      {
        value: "UseMemoAndUseCallback",
        id: "UseMemoAndUseCallback",
        url: "/UseMemoAndUseCallback",
        icon: <AppsIcon />,
      },
    ],
  });

  let [state, setState] = useState("");

  const list = (e) => {
    setState(e);
  };

  useEffect(() => {
    setState("profile");
  }, []);

  return (
    <div className="sidebar" style={{ zIndex: 99 }}>
      <div className="img">
        <img src={img} alt="" className="rounded-circle" width="150" />
      </div>
      <hr />
      <ul
        className="listItem"
        // style={{ height: "400px", overflowX: "scroll" }}
      >
        {menu.list.length > 0 &&
          menu.list.map((items, i) => {
            return (
              <li key={i}>
                <Link
                  to={items.url}
                  onClick={() => list(items.id)}
                  className={
                    state === items.id
                      ? "active  align-items-center"
                      : "align-items-center"
                  }
                  style={{
                    color: "#403c3c",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  <span
                    style={{
                      marginRight: "6px",
                    }}
                  >
                    {items.icon}
                  </span>
                  {items.value !== "To do app v2"
                    ? items.value
                    : `${items.value} (${todo.length})`}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

//Checking PropTypes In Login Component
SideBar.propTypes = {
  img: PropTypes.string,
};

export default SideBar;
