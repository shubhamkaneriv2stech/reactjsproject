import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import DeleteIcon from "@material-ui/icons/Delete";
import { red } from "@material-ui/core/colors";
import ModalPopup from "./ModalPopup";
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
  const { editTODO, deleteTODO } = useContext(GlobalContext);
  console.log(ourData, "shubham");

  return (
    <div>
      <br />
      <table className="table table-bordered table-hover table-responsive ">
        <thead className="thead-dark">
          <tr>
            <th style={{ width: 70, fontSize: "14px" }}>Sr No</th>
            <th style={{ width: 200, fontSize: "14px" }}>Title</th>
            <th style={{ width: 300, fontSize: "14px" }}>Description</th>
            <th style={{ width: 200, fontSize: "14px" }}>Status</th>
            <th style={{ width: 300, fontSize: "14px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ourData.length > 0 ? (
            ourData.map((items, i) => {
              return (
                <tr
                  key={items.id}
                  className={editItem === items.id ? "bg-info" : ""}
                >
                  <td>{i + 1}</td>
                  <td>{items.title}</td>
                  <td>{items.description}</td>
                  <td>
                    {items.status === "Todo" && (
                      <strong className="text-primary">{items.status}</strong>
                    )}
                    {items.status === "Inprogress" && (
                      <strong className="text-warning">{items.status}</strong>
                    )}
                    {items.status === "Done" && (
                      <strong className="text-success">{items.status}</strong>
                    )}
                  </td>
                  <td>
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
        onDelete={deleteTODO}
        handleClose={handleClose}
        title={title}
        itemsID={id}
      />
    </div>
  );
};

export default TodoTable;
