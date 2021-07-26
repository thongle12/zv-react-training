import { notification } from "antd";
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLogs } from "../../api/logApi";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import { Select } from "antd";
import {
  selectedError,
  selectedIsFetching,
  selectedLogs,
} from "../../reducers/toDoSelector";

const { Option } = Select;

const checkCompletedStatus = (log,completedStatus) => {
  return completedStatus  === "All" || log.completed.toString() === completedStatus;
};
const checkSearchTerm = (log,searchTerm,searchKeyList) => {
  return (
    searchTerm === "" ||
    searchKeyList.some((key) => log[key].toLowerCase().includes(searchTerm))
  );
};

function Logs() {
  const text = useRef("");
  const [completedStatus, setCompletedStatus ] = useState("All");
  const [searchKeyList] = useState(["name"]);
  const [searchTerm, setSearchTerm ] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLogs());
  }, []);

  const error = useSelector(selectedError);
  const loading = useSelector(selectedIsFetching);
  const logList = useSelector(selectedLogs);

  const onChange = () => {
    setSearchTerm(text.current.value);
  };

  const filteredLogList = useMemo(() => {
    return logList.filter((x) => checkCompletedStatus(x,completedStatus) && checkSearchTerm(x,searchTerm,searchKeyList));
  }, [completedStatus, searchTerm , logList]);

  if (loading || logList === null) {
    return <Preloader />;
  }
  if (error) {
    notification.open({
      message: error,
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
            setCompletedStatus(value);
          }}
        >
          <Option value="All">All</Option>
          <Option value="false">Complete</Option>
          <Option value="true">NotComplete</Option>
        </Select>

        {filteredLogList.map((item, index) => (
          <LogItem log={item} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default Logs;



  // const filteredLogList = (logList) => {
  //   return logList.filter((item) => {
  //     if (item.completed.toString() == completedStatus) {
  //       return searchKeyList.some((newItem) => {
  //         return (
  //           item[newItem]
  //             .toString()
  //             .toLowerCase()
  //             .indexOf(searchTerm.toLowerCase()) > -1
  //         );
  //       });
  //     } else if (filterParam == "All") {
  //       return searchKeyList.some((newItem) => {
  //         return (
  //           item[newItem]
  //             .toString()
  //             .toLowerCase()
  //             .indexOf(searchTerm.toLowerCase()) > -1
  //         );
  //       });
  //     }
  //   });
  // };
