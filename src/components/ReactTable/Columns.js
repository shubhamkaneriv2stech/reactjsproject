import Moment from "moment";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { Fragment } from "react";
export const COLUMNS = [
  // {
  //     Header: "Sr",

  //     Cell: ({ row }) => {
  //         return <>{row.index + 1}</>;
  //     },
  //     width: 200,
  //     defaultCanSort: false,
  // },
  {
    Header: "First name",
    accessor: "first_name",
    width: 400,
    defaultCanSort: true,
    // disableSortBy: true,
    StyleClass: "text-left",
  },
  {
    Header: "Last name",
    accessor: "last_name",
    width: 400,
    defaultCanSort: true,
    StyleClass: "text-left",
    // disableSortBy: false,
  },
  {
    Header: "User name",
    accessor: "username",
    width: 500,
    defaultCanSort: true,
    // disableSortBy: true,
    StyleClass: "text-left",
  },
  {
    Header: "Date of birth",
    accessor: "date_of_birth",

    Cell: (props) => (
      <Fragment>
        {Moment(new Date(props.row.original.date_of_birth)).format(
          "DD/MM/YYYY"
        )}
      </Fragment>
    ),
    width: 400,
    defaultCanSort: true,

    StyleClass: "text-left",
    disableGlobalFilter: true,
  },
  {
    Header: "Phone",
    accessor: "phone_number",
    width: 850,
    defaultCanSort: false,
    disableSortBy: true,
    StyleClass: "text-left",
    disableGlobalFilter: true,
  },
  {
    Header: "Action",
    Cell: (data) => (
      <Link
        to={{
          pathname: `/table/${data.row.original.id}`,
          myCustomProps: data.row.original,
        }}
      >
        <VisibilityIcon color="action" />
      </Link>
    ),

    width: 250,
    StyleClass: "text-center",
    disableGlobalFilter: true,
  },
];
