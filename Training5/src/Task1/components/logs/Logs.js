import { notification } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogs } from "../../api/toDoApi";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import axios from "axios";
import * as types from "../../constants/ActionTypes";

const Logs = () => {


  // useEffect(() => {
  //   // gọi function getlogs qua bằng lifecycle của hooks
  //   dispatch(getLogs(1))
  //   //eslint-disable-next-line
  // }, []);

 

  const selectedError = (state) => state.logRecuders.error;
  const selectedLoading = (state) => state.logRecuders.loading;
  const selectedLogs = (state) => state.logRecuders.logs;
  const error = useSelector(selectedError);
  const loading = useSelector(selectedLoading);
  const logs = useSelector(selectedLogs);
   const dispatch = useDispatch();

 

  // kiểm tra nếu chưa load dc data sẽ hiện loading
  if (loading || logs === null) {
    return <Preloader />;
  }
  if (error) {
    console.log("rrerer", error);
    notification.open({
      message: error,
    });
  }
  // còn đã có data thì trả về list logs
  return (
    <div>
      <ul className="collection with-header">
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
        ) : (
          logs.map((log, index) => <LogItem log={log} key={index} />)
        )}
      </ul>
    </div>
  );
};



export default Logs;
