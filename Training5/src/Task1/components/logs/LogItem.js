import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteLogs } from "../../api/logApi";
import EditLogModal from "./EditLogModal";


LogItem.propTypes = {
  log: PropTypes.object,
};

function LogItem({ log }) {
  const dispatch = useDispatch();

  const [showModal, setshowModal] = useState(false);
  const [currentId, setCurrentId] = useState();

  
  const onDeleteLog = (id) => {
    dispatch(deleteLogs(id));
  };
  const handleShowModal = (idCurrent) => {
    setshowModal(true);
    setCurrentId(idCurrent);
  }

  const handleCloseModal = () => {
    setshowModal(false);
  }


  return (
    <div>
      <li className="collection-item">
        <div>
        {showModal && <EditLogModal currentId={currentId} closeModal={handleCloseModal} />}
          <a
            className={`modal-trigger ${
              log.completed ? "red-text" : "blue-text"
            }`}
            onClick={() => handleShowModal(log.id)}
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
