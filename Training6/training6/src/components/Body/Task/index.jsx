import { Button, Card, Input } from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatusTask, updateTask } from "../../../action/task";
import * as ActionTypes from "../../../constants/ActionTypes";

TaskPage.propTypes = {
  id: PropTypes.number,
};

function TaskPage({ id }) {
  const dispatch = useDispatch();

  const networkStatus = useSelector((state) => state.networkState.status);

  const mystyle = {
    float: "right",
  };

  const taskReducers = useSelector((state) =>
    state.taskReducer.task.find((x) => x.id === id)
  );
  const { taskName, status } = taskReducers;

  const [taskNameInput, setTaskNameInput] = useState(taskName);

  const readyTasks = useSelector((state) =>
    state.taskReducer.task.filter((x) => x.status === ActionTypes.READY)
  );

  if (networkStatus) {
    for (let i = 0; i < readyTasks.length; i++) {
      dispatch(
        changeStatusTask({
          id: readyTasks[i].id,
          status: ActionTypes.SUBMITTING,
        })
      );
    }
  }

  const handleClickChangeStatusTask = () => {
    if (status === ActionTypes.DRAFT) {
      dispatch(
        changeStatusTask({
          id: id,
          status: ActionTypes.READY,
        })
      );
    }
    else if (status === ActionTypes.ERROR && networkStatus) {
      dispatch(
        changeStatusTask({
          id: id,
          status: ActionTypes.SUBMITTING,
        })
      );
    }
  };

  const onChange = (e) => {
    setTaskNameInput(e.target.value);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      dispatch(
        updateTask({
          id: id,
          taskName: taskNameInput,
        })
      );
    }
  };

  return (
    <div>
      <Card
        className="list-item"
        style={{ margin: "5px" }}
        bodyStyle={{ padding: "5px" }}
      >
        {status !== ActionTypes.DRAFT ? (
          <Input
           
            value={taskNameInput}
            bordered={false}
            style={{ width: "75%" }}
            disabled
          />
        ) : (
          <Input
            value={taskNameInput}
            bordered={false}
            style={{ width: "75%" }}
            onChange={onChange}
            onKeyDown={onKeyDown}
      
          />
        )}

        {status !== ActionTypes.DRAFT && status !== ActionTypes.ERROR ? (
          <Button
            style={mystyle}
            onClick={handleClickChangeStatusTask}
            disabled
          >
            {status}
          </Button>
        ) : (
          <Button style={mystyle} onClick={handleClickChangeStatusTask}>
            {status}
          </Button>
        )}
      </Card>
    </div>
  );
}

export default TaskPage;
