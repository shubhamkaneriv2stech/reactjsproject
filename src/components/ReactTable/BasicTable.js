import React, { useMemo } from "react";

import { COLUMNS } from "./Columns";
import TableData from "../../data/userTable_data.json";

import CommonReactTable from "../common/CommonReactTable";

const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => TableData, []);
    // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    //     useTable({
    //         columns,
    //         data,
    //     });

    // console.log(rows);

    return (
        <CommonReactTable
            data={data}
            columns={columns}
            tableTitle={"User list v2"}
            showPagination={true}
            sorting={true}
            search={true}
        />
    );

    // return (
    //     <Container fluid style={{ padding: "0px 25px" }}>
    //         <div style={{ textAlign: "left", margin: "0px 0px 15px" }}>
    //             <h5>Profile information</h5>
    //         </div>
    //         <Table {...getTableProps()} striped bordered hover>
    //             <thead>
    //                 {headerGroups.map((headerGroup) => (
    //                     <tr {...headerGroup.getHeaderGroupProps()}>
    //                         {headerGroup.headers.map((column) => (
    //                             <th
    //                                 width={column.width}
    //                                 style={{
    //                                     fontSize: "12px",
    //                                     textAlign: "center",
    //                                 }}
    //                                 {...column.getHeaderProps()}
    //                             >
    //                                 {column.render("Header")}
    //                             </th>
    //                         ))}
    //                     </tr>
    //                 ))}
    //             </thead>
    //             <tbody {...getTableBodyProps()}>
    //                 {rows.map((row) => {
    //                     prepareRow(row);
    //                     return (
    //                         <tr
    //                             {...row.getRowProps()}
    //                             // used to get all data of specific row onClick event
    //                             // onClick={() => console.log(row.original)}
    //                         >
    //                             {row.cells.map((cell) => {
    //                                 return (
    //                                     <td
    //                                         {...cell.getCellProps({
    //                                             className:
    //                                                 cell.column.className,
    //                                         })}
    //                                         onClick={() =>
    //                                             console.log(
    //                                                 cell.row.original.id
    //                                             )
    //                                         }
    //                                         style={{ textAlign: "center" }}
    //                                     >
    //                                         {cell.render("Cell")}
    //                                     </td>
    //                                 );
    //                             })}
    //                         </tr>
    //                     );
    //                 })}
    //             </tbody>
    //         </Table>
    //     </Container>
    // );
};

export default BasicTable;
