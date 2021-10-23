import React, { Component } from "react";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import { DndProvider, DropTarget, DragSource } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { v4 as uuidv4 } from "uuid";
import style from "../../styles/Board.module.css";
import Drawer from "../Drawer/Drawer";
import { tasks, statusData } from "../Constants/Constants";
import BoardTitle from "../Reusable/BoardTitle";

class TrelloBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks,
      openAddTaskModal: false,
      searchQuery: "",
      searchedCard: "",
      openDrawer: false,
    };
  }

  componentDidMount() {
    let data = localStorage.getItem("tasksData");
    if (data) {
      let parsedData = JSON.parse(data);
      this.setState({ tasks: parsedData });
    }
  }

  _onUpdateStatus = (id, status) => {
    let { tasks } = this.state;
    let objIndex = tasks.findIndex((obj) => obj.id == id);
    tasks[objIndex].status = status;
    this.setState({ tasks: tasks });

    localStorage.setItem("tasksData", JSON.stringify(tasks));
  };

  _onAddNewTask = (content) => {
    let task = {};
    task.id = uuidv4();
    task.title = content;
    task.status = "todo";
    let new_tasks = [...this.state.tasks, task];
    this.setState({ tasks: new_tasks });

    localStorage.setItem("tasksData", JSON.stringify(new_tasks));
  };

  _onSearchQquery = (e) => {
    e.preventDefault();
    let { searchedCard } = this.state;
    // if (searchedCard !== "") {
    this.setState({ searchQuery: searchedCard });
    // }
  };

  render() {
    const { tasks, openAddTaskModal, searchQuery, searchedCard, openDrawer } =
      this.state;

    let kanbanBoardCardList = (
      <>
        <div className="row mr-0 py-2">
          <div className="col-md-3 d-flex justify-content-center justify-content-md-start align-items-center">
            <BoardTitle title="Kanban Board" />
          </div>
          <div className="col-md-4 ml-3 ml-md-0 d-flex justify-content-center w-100 p-0 p-md-2">
            <form className="form-inline flex-nowrap w-100  justify-content-center">
              <input
                className="form-control form-control-sm mr-sm-2 w-75"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) =>
                  this.setState({ searchedCard: e.target.value.trim() })
                }
              />
              <button
                className="btn btn-success btn-sm my-2 my-sm-0 ml-2 ml-md-0 "
                type="submit"
                onClick={this._onSearchQquery}
              >
                Search
              </button>
            </form>
          </div>
          <div className="col-md-5 d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <button
                className="btn btn-sm btn-success ml-3 ml-md-0"
                onClick={() => this.setState({ openAddTaskModal: true })}
              >
                Add Task
              </button>
            </div>
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center border-left">
                <button className={`btn btn-sm mr-2 ml-3 ${style.filterBtns}`}>
                  Filter
                </button>
                <button
                  className={`btn btn-sm ${style.filterBtns}`}
                  onClick={() => this.setState({ openDrawer: true })}
                >
                  Show Menu
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={`ml-3 mr-3 mt-1 ${style.kanbanBoardTask_list}`}>
          {statusData.map((val) => (
            <TrelloCardColumn status={val.name} key={val.name}>
              <div className={`${style.eachColumn}`}>
                <div className={`${style.columnHeading} ml-3`}>
                  {val.mapping}
                </div>
                {tasks ? (
                  <div className="test1">
                    {tasks
                      .filter(
                        (item) =>
                          item.title.toLowerCase().indexOf(searchQuery) !==
                            -1 ||
                          item.status.toLowerCase().indexOf(searchQuery) !== -1
                      )
                      .filter((item) => item.status === val.name)
                      .map((item) => (
                        <TrelloCardItem
                          id={item.id}
                          onDrop={this._onUpdateStatus}
                          key={item.id}
                        >
                          <div className={`${style.eachitem}`}>
                            {item.title}
                          </div>
                        </TrelloCardItem>
                      ))}
                  </div>
                ) : (
                  <span>No Value</span>
                )}
              </div>
            </TrelloCardColumn>
          ))}
        </div>
      </>
    );

    return (
      <>
        <div>
          <DndProvider
            backend={TouchBackend}
            options={{ enableMouseEvents: true }}
          >
            {kanbanBoardCardList}
          </DndProvider>

          {openAddTaskModal && (
            <AddTaskModal
              visible={openAddTaskModal}
              onHide={() => this.setState({ openAddTaskModal: false })}
              addTask={this._onAddNewTask}
            />
          )}
        </div>
        {openDrawer && (
          <Drawer
            open={openDrawer}
            onClose={() => this.setState({ openDrawer: false })}
          />
        )}
      </>
    );
  }
}

export default TrelloBoard;

let targetedCard = {
  drop(props) {
    return { name: props.status };
  },
};

class TrelloCardColumn extends Component {
  render() {
    return this.props.connectDropTarget(<div>{this.props.children}</div>);
  }
}

TrelloCardColumn = DropTarget(
  "kanbanItem",
  targetedCard,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
)(TrelloCardColumn);

let boxSource = {
  beginDrag(props) {
    return {
      name: props.id,
    };
  },

  endDrag(props, monitor) {
    let item = monitor.getItem();
    let dropResult = monitor.getDropResult();
    if (dropResult) {
      props.onDrop(monitor.getItem().name, dropResult.name);
    }
  },
};

class TrelloCardItem extends React.Component {
  render() {
    return this.props.connectDragSource(<div>{this.props.children}</div>);
  }
}

TrelloCardItem = DragSource("kanbanItem", boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
}))(TrelloCardItem);
