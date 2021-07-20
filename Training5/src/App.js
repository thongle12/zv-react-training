import React, { Fragment, useEffect, useRef, useState } from "react";
import Logs from "./Task1/components/logs/Logs";
import AddLogModal from "./Task1/components/logs/AddLogModal";
import EditLogModal from "./Task1/components/logs/EditLogModal";
import AddBtn from "./Task1/components/layout/AddBtn";
import M from "materialize-css/dist/js/materialize.min.js";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'


const App = () => {

  useEffect(() => {
    M.AutoInit();
    return () => {
      <EditLogModal />;
    };
  }, []);
  return (
    <Fragment>
      <AddBtn />
      <AddLogModal />
      <Logs />
    </Fragment>
  );
};

export default App;
