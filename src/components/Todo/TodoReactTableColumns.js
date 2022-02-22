import EditIcon from "@material-ui/icons/Edit";

import DeleteIcon from "@material-ui/icons/Delete";
import { red, yellow } from "@material-ui/core/colors";
import { Fragment } from "react";

export const getTodoTableColumns = (passData) => {
  return [
    {
      Header: "Sr",
      Cell: ({ row }) => {
        return <Fragment>{row.index + 1}</Fragment>;
      },
      width: 10,
    },
    {
      Header: "Title",
      accessor: "title",
      width: 250,
    },
    {
      Header: "Description",
      accessor: "description",
      width: 250,
    },
    {
      Header: "Status",
      accessor: "status",
      width: 150,

      Cell: (cellProps) => {
        switch (cellProps.value) {
          case "Todo":
            return <strong className="text-primary">Todo</strong>;
          case "Inprogress":
            return <strong className="text-warning">Inprogress</strong>;
          case "Done":
            return <strong className="text-success">Done</strong>;
          default:
            return <Fragment></Fragment>;
        }
      },
    },
    {
      Header: "Actions",
      Cell: (data) => {
        console.log(data);
        return (
          <div>
            <EditIcon
              style={{ color: yellow[500] }}
              onClick={data.row.original.id}
            />

            <DeleteIcon
              style={{ color: red[500] }}
              onClick={() => {
                passData(data.row.original.id);
              }}
            />
          </div>
        );
      },
      width: 150,
    },
  ];
};

export const COLUMNS = [
  {
    Header: "Sr",
    Cell: ({ row }) => {
      return <Fragment>{row.index + 1}</Fragment>;
    },
    width: 10,
  },
  {
    Header: "Title",
    accessor: "title",
    width: 250,
  },
  {
    Header: "Description",
    accessor: "description",
    width: 250,
  },
  {
    Header: "Status",
    accessor: "status",
    width: 150,

    Cell: (cellProps) => {
      switch (cellProps.value) {
        case "Todo":
          return <strong className="text-primary">Todo</strong>;
        case "Inprogress":
          return <strong className="text-warning">Inprogress</strong>;
        case "Done":
          return <strong className="text-success">Done</strong>;
        default:
          return <Fragment></Fragment>;
      }
    },
  },
  {
    Header: "Actions",
    Cell: (data) => {
      console.log(data);
      return (
        <div>
          <EditIcon
            style={{ color: yellow[500] }}
            onClick={data.row.original.id}
          />

          <DeleteIcon
            style={{ color: red[500] }}
            onClick={data.row.original.id}
          />
        </div>
      );
    },
    width: 150,
  },
];
