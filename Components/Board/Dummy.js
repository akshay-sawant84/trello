import React, { useState } from "react";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { uuid } from "uuidv4";



const Board = () => {
  const [openAddTaskModal, setopenAddTaskModal] = useState(false);

  return (
    <div>
      <div className="row mr-0 py-2">
        <div className="col-md-3">
          <h4 className="text-white mb-0 ml-md-5 ml-2">Kanban Board</h4>
        </div>
        <div className="col-md-5 ml-3 ml-md-0 d-flex justify-content-between flex-wrap">
          <form class="form-inline">
            <input
              class="form-control form-control-sm mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success btn-sm my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          <div>
            <button
              className="btn btn-sm btn-success"
              onClick={() => setopenAddTaskModal(true)}
            >
              Add Task
            </button>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-end">
          <div className="">
            <button className="btn btn-sm btn-success mr-3">Filter</button>
            <button className="btn btn-sm btn-success">Show Menu</button>
          </div>
        </div>
      </div>

      <div className="row bg-primary">
        <DragDropContext onDragEnd={(result) => console.log(result)}>
          {Object.entries(taskStatusData).map(([id, val]) => (
            <Droppable droppableId={id}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="col-2 bg-light"
                >
                  {val.items.map((item, i) => (
                    <Draggable key={i} draggableId={item.id} index={i}>
                      {(provided, snapshot) => (
                        <div
                          className="bg-white"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: "none",
                            padding: 16,
                            margin: "0 0 8px 0",
                            minHeight: "50px",
                          }}
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>

      {openAddTaskModal && (
        <AddTaskModal
          visible={openAddTaskModal}
          onHide={() => setopenAddTaskModal(false)}
        />
      )}
    </div>
  );
};

export default Board;




