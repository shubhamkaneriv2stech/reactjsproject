import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { blue } from "@material-ui/core/colors";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
export const COLUMNS = [
  {
    id: "expander", // Make sure it has an ID
    width: 50,
    Cell: ({ row, rows, toggleRowExpanded }) => {
      return (
        <span
          {...row.getToggleRowExpandedProps({
            onClick: () => {
              //rows is find Which row is Expanded
              const expandedRow = rows.find((row) => row.isExpanded);

              if (expandedRow) {
                const isSubItemOfRow = Boolean(
                  expandedRow && row.id === expandedRow.id
                );
                if (isSubItemOfRow) {
                  const expandedSubItem = expandedRow.subRows.find(
                    (subRow) => subRow.isExpanded
                  );
                  if (expandedSubItem) {
                    const isClickedOnExpandedSubItem =
                      expandedSubItem.id === row.id;
                    console.log(isClickedOnExpandedSubItem);
                    if (!isClickedOnExpandedSubItem) {
                      toggleRowExpanded(expandedSubItem.id, false);
                    }
                  }
                } else {
                  toggleRowExpanded(expandedRow.id, false);
                }
              }
              row.toggleRowExpanded();
            },
          })}
        >
          {row.isExpanded ? (
            <IndeterminateCheckBoxIcon style={{ color: blue[500] }} />
          ) : (
            <AddBoxIcon style={{ color: blue[500] }} />
          )}
        </span>
      );
    },
  },
  {
    Header: "Id",
    accessor: "id",
    width: 100,
    defaultCanSort: false,
    disableSortBy: true,
  },
  {
    Header: "User Id",
    accessor: "userId",
    width: 100,
    defaultCanSort: true,
    disableSortBy: true,
    StyleClass: "text-left",
  },
  {
    Header: "title",
    accessor: "title",
    width: 400,
    defaultCanSort: true,
    StyleClass: "text-left",

    Cell: ({ row }) => (
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 400 }}
        overlay={(props) => (
          <Tooltip id="button-tooltip" {...props}>
            {row.original.title}
          </Tooltip>
        )}
      >
        <div className="ellipsis_class">
          <p>{row.original.title}</p>
        </div>
      </OverlayTrigger>
    ),
    disableSortBy: true,
  },
  {
    Header: "body",
    accessor: "body",
    width: 400,
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
];
