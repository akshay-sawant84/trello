import React, { useState } from "react";
import Modal from "react-awesome-modal";

const AddTaskModal = ({ visible, onHide, addTask }) => {
  const [task, settask] = useState("");

  const _onAddTask = () => {
    if (task === "") {
      alert("Please add task");
    } else {
      addTask(task);
      onHide();
    }
  };

  return (
    <Modal
      visible={visible}
      width={"400"}
      height="200"
      effect="fadeInUp"
      className="mx-3"
      onClickAway={() => onHide()}
    >
      <div className="row mx-0 position-relative">
        <p
          className="float-right position-absolute mr-3 mt-1 btn p-0"
          style={{ right: 0 }}
          onClick={() => onHide()}
        >
          X
        </p>
        <h3 className="text-center w-100 mb-4 mt-3">Add Task</h3>
        <div className="col-md-12 d-flex justify-content-center align-items-center flex-column h-100">
          <input
            class="form-control text-capitalize"
            type="text"
            placeholder="Add Task"
            onChange={(e) => settask(e.target.value)}
          />
          <button
            className="btn btn-primary text-center mt-4"
            onClick={_onAddTask}
          >
            Add Task
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddTaskModal;
