import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "antd";
import { Card } from "antd";
import { Button } from "antd";
import { Row, Col } from "antd";
import * as actionTypes from "../../constants/ActionTypes";

import { addTask } from "../../action/task";

function Header() {
  const dispatch = useDispatch();

  const networkState = useSelector((state) => state.networkState.status);


  const [loadings, setLoading] = useState([]);

  const [task, setTask] = useState({
    id: null,
    taskName: "",
    status: actionTypes.DRAFT,
  });

  const handleSubmit = (index, e) => {
    const newLoadings = [...loadings];
    newLoadings[index] = true;
    setLoading(newLoadings);
    setTimeout(() => {
      const newLoadings = [...loadings];
      newLoadings[index] = false;
      setLoading(newLoadings);
    }, 200);
    //add
    e.preventDefault();
    if (task.taskName === "") {
      //chưa nhập -> ko add
    } else {
      dispatch(addTask(task));
      setTask((prevState) => ({
        ...prevState,
        taskName: "",
        id: null,
      }));
    }
  };

  return (
    <Card
      align="middle"
      size="small"
      title="Small size card"
      style={{ marginLeft: 500, width: 500 }}
      gutter={[16, 24]}
    >
      <div>
        <p>Network {networkState ? "Online" : "Offline"}</p>
      </div>
      <Row>
        <Col span={20}>
          <Input
            placeholder="Text input"
            value={task.taskName}
            onChange={(e) =>
              setTask((prevState) => ({
                ...prevState,
                taskName: e.target.value,
                id: Math.random(),
              }))
            }
          />
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            loading={loadings[0]}
            onClick={(e) => handleSubmit(0,e)}
          >
            Click me!
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default Header;
