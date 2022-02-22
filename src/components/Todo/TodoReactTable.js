import { useTable } from "react-table";

import { Table } from "react-bootstrap";

import ModalPopup from "./ModalPopup";

const TodoReactTable = ({
    data,
    columns,
    onDelete,
    onEdit,
    editItem,
    show,
    handleClose,
    passData,
    id,
    title,
}) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });
    return (
        <div>
            <br />
            <Table {...getTableProps()} striped bordered hover>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    width={column.width}
                                    style={{ fontSize: "12px" }}
                                    {...column.getHeaderProps()}
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.length > 0 ? (
                        rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr
                                    {...row.getRowProps()}
                                    className={
                                        editItem === row.original.id
                                            ? "bg-info"
                                            : ""
                                    }
                                >
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps({
                                                    className:
                                                        cell.column.className,
                                                })}
                                                // onClick={() => passData(row)}
                                                // onClick={() =>
                                                //     console.log(cell)
                                                // }
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="5">...No Data !</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            <ModalPopup
                show={show}
                onDelete={onDelete}
                handleClose={handleClose}
                title={title}
                itemsID={id}
            />
        </div>
    );
};

export default TodoReactTable;
