import React, { Fragment, useEffect, useState } from "react";
import SearchBar from "./Task1/components/layout/SearchBar";
import Logs from "./Task1/components/logs/Logs";
import AddLogModal from "./Task1/components/logs/AddLogModal";
import EditLogModal from "./Task1/components/logs/EditLogModal";
import AddBtn from "./Task1/components/layout/AddBtn";
import M from "materialize-css/dist/js/materialize.min.js";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import axios from "axios";
import { useDispatch } from "react-redux";
import { getLogs } from "./Task1/api/toDoApi";

const App = () => {
  const dispatch = useDispatch();
  const [dataApi, setDataApi] = useState(null);

  useEffect(() => {
    M.AutoInit();
    // (async () => {
    //   const res = await axios.get("http://localhost:9000/todos")
    //   const data = await res.data;
    //   // setDataApi(data);
    //   console.log('data th', data)
    //   dispatch({
    //     type: "GET_LOGS",
    //     payload: data,
    // });
    // })()
    // return () => {
    // }
    dispatch(getLogs());


  }, [])
  return (
    <Fragment>
      <SearchBar />
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <Logs />       
    </Fragment>
    
  );
};

export default App;
