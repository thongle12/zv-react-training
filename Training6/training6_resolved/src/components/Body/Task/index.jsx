import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Input, Row } from "antd";
import { useState } from "react";
import * as types from "../../../constants";
import { changeTask } from "../../../action";
import {
  getReadyTaskList,
  getStatusNetwork,
  getTaskByPropsId,
} from "../../../reducers/getSelector";
Task.propTypes = {
  idProps: PropTypes.number,
};

function Task({ idProps }) {
  const dispatch = useDispatch();

  const detailTaskByPropsId = useSelector((state) => getTaskByPropsId(state, idProps));
  const readyTaskList = useSelector(getReadyTaskList);
  const networkStatus = useSelector(getStatusNetwork);

  useEffect(() => {
    if (networkStatus) {
      let result = {};
      for (var i = 0; i < readyTaskList.length; i++) {
        // result[readyTaskList[i].key] = readyTaskList[i].value;
        result = {
          id: readyTaskList[i].id,
          name: readyTaskList[i].name,
          status: readyTaskList[i].status,
        };
        dispatch(changeTask(result));
      }
    }
  }, [networkStatus]);

  const { name, status } = detailTaskByPropsId;

  const [inputValue, setInputValue] = useState(name);

  const onClickChangeStatusTask = () => {
    const newValue = {
      id: idProps,
      name: inputValue,
      status: types.READY,
    };
    dispatch(changeTask(newValue));
  };

  return (
    <div>
      <Row>
        <Col span={20}>
          {status === types.SUCCESS ? (
            <Input
              style={{ margin: 4 }}
              size="large"
              value={inputValue}
              disabled
            />
          ) : (
            <Input
              style={{ margin: 4 }}
              size="large"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          )}
        </Col>
        <Col span={4}>
          {status === types.SUCCESS ? (
            <Button size="large" type="primary" disabled>
              {status}
            </Button>
          ) : (
            <Button
              size="large"
              type="primary"
              onClick={onClickChangeStatusTask}
            >
              {status}
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Task;
