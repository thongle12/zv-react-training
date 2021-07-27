import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { getIdList } from "../../reducers/getSelector";
import Task from "./Task";

function Body() {

  const idTaskList = useSelector(getIdList);
  return (
    <div>
      <Card style={{ width: 500, marginLeft: 500 }} align="middle">
        {idTaskList.map((x, index) => (
          <Task idProps={x} key={index} />
        ))}
      </Card>
    </div>
  );
}

export default Body;
