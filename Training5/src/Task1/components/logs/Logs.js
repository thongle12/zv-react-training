import { notification } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogs } from "../../api/logApi";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import { Select } from "antd";

const { Option } = Select;

const Logs = () => {
  const text = useRef("");
  const [filterParam, setFilterParam] = useState(["All"]);
  const [searchParam] = useState(["name"]);

  const [dataSearch, setDataSearch] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    // gọi function getlogs qua bằng lifecycle của hooks
    dispatch(getLogs());
    //eslint-disable-next-line
  }, []);

  const selectedError = (state) => state.logRecuders.error;
  const selectedLoading = (state) => state.logRecuders.isFetching;
  const selectedLogs = (state) => state.logRecuders.logs;
  const error = useSelector(selectedError);
  const loading = useSelector(selectedLoading);
  const logs = useSelector(selectedLogs);

  // kiểm tra nếu chưa load dc data sẽ hiện loading
  if (loading || logs === null) {
    return <Preloader />;
  }
  if (error) {
    notification.open({
      message: error,
    });
  }

  const onChange = (e) => {
    setDataSearch(text.current.value);
  };

  function search(logs) {
    return logs.filter((item) => {
      if ( item.completed.toString() == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(dataSearch.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem]
              .toString()
              .toLowerCase()
              .indexOf(dataSearch.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    <div>
      <nav style={{ marginBottom: "30px" }} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search by name"
                ref={text}
                onChange={onChange}
              />
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
      <ul className="collection">
        <Select
          defaultValue="All"
          style={{ width: 120 }}
          onChange={(value) => {
            setFilterParam(value);
          }}
        >
          <Option value="All">All</Option>
          <Option value="false">Complete</Option>
          <Option value="true">NotComplete</Option>
        </Select>
  

        {search(logs).map((item, index) => (
         <LogItem log={item} key={index} />
        ))}

      </ul>
    </div>
  );
};

export default Logs;
