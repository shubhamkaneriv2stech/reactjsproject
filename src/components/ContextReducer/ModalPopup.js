import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { GlobalContext } from "./GlobalState";

const ModalPopup = ({ handleClose, show, title, itemsID }) => {
    const { deleteTODO } = useContext(GlobalContext);
    console.log(itemsID, " itemid");
    return (
        <div>
            <Modal show={show} onHide={handleClose} title={title}>
                <Modal.Header>
                    <Modal.Title>To Do App </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        <strong>
                            Are You Sure You Want To Delete ? {title}
                        </strong>
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => deleteTODO(itemsID)}
                    >
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalPopup;
