import React from "react";
import { useDispatch } from "react-redux";
import { deleteLogs, setCurrentLog } from "../../api/toDoApi";

import PropTypes from "prop-types";

LogItem.propTypes = {
  log: PropTypes.object,
};

function LogItem({ log }) {
  const dispatch = useDispatch();

  const onDeleteLog = (id) => {
    dispatch(deleteLogs(id));
  };

  const onClickCurrentLogId = (id) => {
    dispatch(setCurrentLog(id));
  };

  return (
    <div>
      <li className="collection-item">
        <div>
          <a
            href="#edit-log-modal"
            className={`modal-trigger ${
              log.completed ? "red-text" : "blue-text"
            }`}
            onClick={() => onClickCurrentLogId(log.id)}
          >
            {log.name}
          </a>
          <br />
          <span className="grey-text">
            <span className="black-text">ID {log.id}</span>
          </span>
          <a
            href="#!"
            onClick={() => onDeleteLog(log.id)}
            className="secondary-content"
          >
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </li>
    </div>
  );
}

export default LogItem;
