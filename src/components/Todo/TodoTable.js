import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import ModalPopup from "./ModalPopup";
import DeleteIcon from "@material-ui/icons/Delete";
import { red } from "@material-ui/core/colors";
const TodoTable = ({
    ourData,
    onDelete,
    onEdit,
    editItem,
    show,
    handleClose,
    passData,
    id,
    title,
}) => {
    console.log(ourData, "shubham");
    console.log(id, "shubham id");
    console.log(title, "shubham tittle");
    return (
        <div>
            <br />
            <table className="table table-bordered table-hover table-responsive ">
                <thead className="thead-dark">
                    <tr style={{ fontSize: "14px" }}>
                        <th style={{ width: 70 }}>Sr No</th>
                        <th style={{ width: 200 }}>Title</th>
                        <th style={{ width: 300 }}>Description</th>
                        <th style={{ width: 50 }}>Status</th>
                        <th style={{ width: 30 }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {ourData.length > 0 ? (
                        ourData.map((items, i) => {
                            return (
                                <tr
                                    key={items.id}
                                    className={
                                        editItem === items.id ? "bg-info" : ""
                                    }
                                >
                                    <td>{i + 1}</td>
                                    <td>{items.title}</td>
                                    <td>{items.description}</td>
                                    <td>
                                        {items.status === "Todo" && (
                                            <strong className="text-primary">
                                                {items.status}
                                            </strong>
                                        )}
                                        {items.status === "Inprogress" && (
                                            <strong className="text-warning">
                                                {items.status}
                                            </strong>
                                        )}
                                        {items.status === "Done" && (
                                            <strong className="text-success">
                                                {items.status}
                                            </strong>
                                        )}
                                    </td>
                                    <td>
                                        <EditIcon
                                            color="secondary"
                                            onClick={(e) => {
                                                onEdit(items.id);
                                            }}
                                        />

                                        <DeleteIcon
                                            style={{ color: red[500] }}
                                            onClick={(e) => {
                                                passData(items.id, items.title);
                                            }}
                                        />
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="5">...No Data !</td>
                        </tr>
                    )}
                </tbody>
            </table>
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

export default TodoTable;
