import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
  useExpanded,
} from "react-table";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { Container, Table, Row, Col } from "react-bootstrap";

import PropTypes from "prop-types";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { Button } from "@material-ui/core";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import GlobalSearch from "./GlobalSearch";

const CommonReactTable = ({
  data,
  columns,
  editItem,
  tableTitle,
  showPagination,
  search,
  renderRowSubComponent,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    rows,
    prepareRow,
    visibleColumns,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5, expanded: true },
    },

    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination
  );
  console.log(data);
  return (
    <Container fluid style={{ padding: "0px 25px" }}>
      <Row
        style={{
          justifyContent: "space-between",
          padding: "15px 0px ",
          alignItems: "center",
        }}
      >
        <Col xs={4}>
          <h5>{tableTitle}</h5>
        </Col>

        {search && (
          <Col xs={4}>
            <GlobalSearch filter={globalFilter} setFilter={setGlobalFilter} />
          </Col>
        )}
      </Row>

      <Table {...getTableProps()} striped bordered hover>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              style={{
                fontSize: "12px",
              }}
            >
              {headerGroup.headers.map((column) => (
                <th
                  width={column.width}
                  className={column.StyleClass}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}

                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <BiDownArrowAlt style={{ fontSize: "22px" }} />
                      ) : (
                        <BiUpArrowAlt style={{ fontSize: "22px" }} />
                      )
                    ) : column.canSort ? (
                      <ImportExportIcon style={{ fontSize: "22px" }} />
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {showPagination ? (
          <tbody {...getTableBodyProps()}>
            {page.length > 0 ? (
              page.map((row) => {
                prepareRow(row);
                return (
                  <>
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            // style={{
                            //     textAlign: "left",
                            // }}
                            className={cell.column.StyleClass}
                            onClick={() => console.log(typeof cell.value)}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>

                    {/* {row.isExpanded &&
                                            renderRowSubComponent(row)} */}
                    {row.isExpanded && (
                      <tr>
                        <td colSpan={visibleColumns.length}>
                          {renderRowSubComponent(row)}
                        </td>
                      </tr>
                    )}
                  </>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">...No Data !</td>
              </tr>
            )}
          </tbody>
        ) : (
          <tbody {...getTableBodyProps()}>
            {rows.length > 0 ? (
              rows.map((row) => {
                prepareRow(row);
                return (
                  <>
                    <tr
                      {...row.getRowProps()}
                      className={editItem === row.original.id ? "bg-info" : ""}
                    >
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps({
                              className: cell.column.className,
                            })}
                            // onClick={() => passData(row)}
                            // onClick={() =>
                            //     console.log(cell)
                            // }
                            // style={{
                            //     textAlign: "center",
                            // }}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>

                    {/* {row.isExpanded &&
                                            renderRowSubComponent(row)} */}
                    {row.isExpanded && (
                      <tr>
                        <td colSpan={visibleColumns.length}>
                          {renderRowSubComponent(row)}
                        </td>
                      </tr>
                    )}
                  </>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">...No Data !</td>
              </tr>
            )}
          </tbody>
        )}
      </Table>
      {showPagination && (
        <div className="d-flex justify-content-between align-items-center ">
          <div>
            Page <strong>{pageIndex + 1}</strong> -{" "}
            <strong> {pageOptions.length}</strong>
            <span style={{ padding: "3px" }}>of</span>
            <strong>{rows.length}</strong> Go to Page:
            <input
              type="number"
              defaultValue={pageIndex + 1}
              min="1"
              max={pageOptions.length}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              style={{
                width: "40px",
                marginRight: "5px",
                marginLeft: "5px",
                height: "30px",
                borderRadius: "5px",
                borderColor: "#0d6efd",
              }}
            />
          </div>
          <div>
            {" "}
            Row Per Page:
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              style={{
                width: "90px",
                marginRight: "3px",
                marginLeft: "3px",
                height: "30px",
                borderRadius: "5px",
                borderColor: "#0d6efd",
              }}
            >
              {[5, 10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
            <Button
              variant="contained"
              size="small"
              style={{
                marginRight: "3px",
                marginLeft: "3px",
              }}
              startIcon={<FaAngleDoubleLeft />}
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            />
            <Button
              variant="contained"
              size="small"
              style={{
                marginRight: "3px",
                marginLeft: "3px",
              }}
              startIcon={<NavigateBeforeIcon />}
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            />
            <Button
              variant="contained"
              size="small"
              style={{
                marginRight: "3px",
                marginLeft: "3px",
              }}
              startIcon={<NavigateNextIcon />}
              onClick={() => nextPage()}
              disabled={!canNextPage}
            />
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: "3px" }}
              startIcon={<FaAngleDoubleRight />}
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            />
          </div>
        </div>
      )}
    </Container>
  );
};

CommonReactTable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  showPagination: PropTypes.bool,
  search: PropTypes.bool,
  tableTitle: PropTypes.string,
  editItem: PropTypes.string,
};

export default CommonReactTable;
