import { OverlayTrigger, Tooltip } from "react-bootstrap";
export const SubRowsColumns = [
  {
    Header: "Id",
    accessor: "id",
    width: 100,
    defaultCanSort: false,
    disableSortBy: true,
  },
  {
    Header: "Body",
    accessor: "body",
    width: 100,

    defaultCanSort: true,
    StyleClass: "text-left",

    Cell: ({ row }) => (
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={(props) => (
          <Tooltip id="button-tooltip" {...props}>
            {row.original.body}
          </Tooltip>
        )}
      >
        <div className="ellipsis_class">
          <p>{row.original.body}</p>
        </div>
      </OverlayTrigger>
    ),
    disableSortBy: true,
  },
  {
    Header: "Name",
    accessor: "name",
    width: 100,

    defaultCanSort: true,
    StyleClass: "text-left",

    Cell: ({ row }) => (
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={(props) => (
          <Tooltip id="button-tooltip" {...props}>
            {row.original.name}
          </Tooltip>
        )}
      >
        <div className="ellipsis_class">
          <p>{row.original.name}</p>
        </div>
      </OverlayTrigger>
    ),
    disableSortBy: true,
  },
  {
    Header: "Email",
    accessor: "email",
    width: 100,
    defaultCanSort: true,
    disableSortBy: true,
    StyleClass: "text-left",
  },
];
