import React, { useState } from "react";
import { Button, Card, Col, Input, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../../action";
import * as types from "../../constants";
import {getStatusNetwork} from '../../reducers/getSelector'
function Header() {
  const [dataInput, setDataInput] = useState();
  const dispatch = useDispatch();
  const networkStatus = useSelector(getStatusNetwork);

  const onClick = () => {
    const newTask = {
      id: Math.random(),
      name: dataInput,
      status: types.DRAFT,
    };
    dispatch(addNewTask(newTask));
  };
  return (
    <div>
      <Card
        style={{ width: 500, marginLeft: 500 }}
        title="Task Submission"
        align="middle"
      >
        <p>Network {networkStatus ? <p> Online </p> : <p> Offline </p>} </p>
        <Row>
          <Col span={20}>
            <Input
              size="large"
              placeholder="Enter task"
              onChange={(e) => setDataInput(e.target.value)}
            />
          </Col>
          <Col span={4}>
            <Button size="large" type="primary" onClick={onClick}>
              Add
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Header;
