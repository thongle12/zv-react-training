import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import TaskPage from "./Task";

Body.propTypes = {};

function Body(props) {
  const selectedTasks = (state) =>
    state.taskReducer.task.map((task) => task.id);

  const taskReducer = useSelector(selectedTasks);


  return (
    <div>
      <Card
        bodyStyle={{ padding: "10px" }}
        align="middle"
        size="small"
        style={{ marginLeft: 500, width: 500 }}
        gutter={[16, 24]}
      >
        {taskReducer.map((task) => (
          <TaskPage id={task} />
        ))}
      </Card>
    </div>
  );
}

export default Body;
