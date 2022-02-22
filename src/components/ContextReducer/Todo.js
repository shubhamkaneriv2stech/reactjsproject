import React, { useState } from "react";
import TodoTable from "./TodoTable";
import { Button, Form } from "react-bootstrap";

const Todo = () => {
  const [validated, setValidated] = useState(false);

  const [todoDetails, setTodoDetails] = useState({
    id: "",
    title: "",
    description: "",
    status: "",
    items: [],
  });

  const [edit, setEdit] = useState(false);

  const [editItem, setEditItem] = useState(null);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [id, setid] = useState("");
  const [title, settitle] = useState("");

  const handler = (e) => {
    setTodoDetails({
      ...todoDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handler1 = (e) => {
    setTodoDetails({
      items: todoDetails.items,
      title: "",
      description: "",
      status: "",
      id: "",
    });
    setEdit(false);
    setEditItem("");
    setShow(false);
  };

  const submitHandler = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();
    if (form.checkValidity() === false) {
      setValidated(true);
    } else if (todoDetails && edit) {
      console.log("---------------------------------------------------");
      console.log(todoDetails.items);

      const newEdit = todoDetails.items.find((i) => i.id === editItem);

      newEdit.title = todoDetails.title;
      newEdit.description = todoDetails.description;
      newEdit.status = todoDetails.status;

      console.log(newEdit);

      setTodoDetails({
        items: todoDetails.items,
        title: "",
        description: "",
        status: "",
        id: "",
      });
      setValidated(false);
      console.log(todoDetails.items, " itemz");
    } else {
      let items = [...todoDetails.items];
      items.push({
        id: Math.floor(100000 + Math.random() * 900000),
        title: todoDetails.title,
        description: todoDetails.description,
        status: todoDetails.status,
      });

      setTodoDetails({
        items,
        title: "",
        description: "",
        status: "",
        id: "",
      });
      setValidated(false);
    }
    console.log(todoDetails.items);
    setEdit(false);
    setEditItem("");
    setShow(false);
  };

  const passData = (id, title) => {
    console.log("in pass data", id, title);
    setShow(true);
    setid(id);
    settitle(title);

    console.log("in pass data", id);
    console.log("in pass data", title);
  };

  const onDelete = (todo) => {
    console.log(" iam on Delete off todo", todo);
    console.log("OurData", todoDetails.items);

    const updateList = todoDetails.items.filter((e) => e.id !== todo);

    console.log(updateList, "updatelist");
    setTodoDetails({
      items: updateList,
    });
    setShow(false);
  };

  const onEdit = (id) => {
    console.log(" iam on Edit  todo", id);

    const updateList = todoDetails.items.find((e) => {
      console.log(e);
      return e.id === id;
    });
    console.log(updateList.id, "updatelist");

    setEdit(true);
    setEditItem(id);
    setTodoDetails({
      items: todoDetails.items,
      title: updateList.title,
      description: updateList.description,
      status: updateList.status,
      id: updateList.id,
    });
  };

  return (
    <div className="container ">
      {/* <form onSubmit={submitHandler} className="mt-3">
        <div className="form-group col-md-10">
          <label htmlFor="title" className={Style.label}>
            Title
          </label>
          <input
            type="text"
            className="form-control"
            value={todoDetails.title}
            onChange={handler}
            id="title"
            name="title"
          />
        </div>

        <label htmlFor="description" className={Style.label}>
          Description
        </label>
        <div className="form-group col-md-10">
          <textarea
            type="text"
            className="form-control"
            value={todoDetails.description}
            onChange={handler}
            id="description"
            name="description"
            rows="2"
          ></textarea>
        </div>

        <div className="form-group col-md-10">
          <label htmlFor="status" className={Style.label}>
            Status
          </label>
          <select
            id="status"
            name="status"
            className="form-control"
            onChange={handler}
            value={todoDetails.status}
          >
            <option value="">Select Status</option>
            <option value="Todo">Todo</option>
            <option value="Inprogress">Inprogress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <br />

        {edit ? (
          <div>
            <button type="submit" className="btn btn-primary mr-3">
              Update todo
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={handler1}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button type="submit" className="btn btn-primary">
            Add todo
          </button>
        )}
      </form> */}
      <Form
        noValidate
        validated={validated}
        onSubmit={submitHandler}
        className="mt-3"
      >
        <Form.Group className="mb-3" controlId="title">
          <Form.Label style={{ textAlign: "left", display: "block" }}>
            Title
          </Form.Label>

          <Form.Control
            type="text"
            placeholder="Title"
            required
            name="title"
            value={todoDetails.title}
            onChange={handler}
          />

          <Form.Control.Feedback style={{ textAlign: "left" }} type="invalid">
            Please provide a valid title.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label style={{ textAlign: "left", display: "block" }}>
            Description
          </Form.Label>

          <Form.Control
            as="textarea"
            type="text"
            value={todoDetails.description}
            onChange={handler}
            name="description"
            placeholder="Description"
            rows={3}
            required
          />

          <Form.Control.Feedback style={{ textAlign: "left" }} type="invalid">
            Please provide a valid Description.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label style={{ textAlign: "left", display: "block" }}>
            Status
          </Form.Label>
          <Form.Control
            required
            as="select"
            name="status"
            onChange={handler}
            value={todoDetails.status}
          >
            <option value="">Select Status</option>
            <option value="Todo">Todo</option>
            <option value="Inprogress">Inprogress</option>
            <option value="Done">Done</option>
          </Form.Control>
          <Form.Control.Feedback style={{ textAlign: "left" }} type="invalid">
            Please Select Status.
          </Form.Control.Feedback>
        </Form.Group>
        <br />
        {edit ? (
          <div>
            <Button type="submit" variant="primary" className="m-3">
              Update todo
            </Button>
            <Button type="button" variant="warning" onClick={handler1}>
              Cancel
            </Button>
          </div>
        ) : (
          <Button type="submit" variant="primary">
            Add Todo
          </Button>
        )}
      </Form>

      <TodoTable
        ourData={todoDetails.items}
        onDelete={onDelete}
        onEdit={onEdit}
        editItem={editItem}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        passData={passData}
        id={id}
        title={title}
      />
    </div>
  );
};

export default Todo;
