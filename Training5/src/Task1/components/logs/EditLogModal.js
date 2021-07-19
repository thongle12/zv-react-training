import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLogs } from "../../api/toDoApi";

const modalStyle = {
  width: "75%",
  height: "75%",
};

const selectedLog = (state, taskId) =>
  state.logRecuders.logs.find((task) => task.id === taskId);

const EditLogModal = () => {
   const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  const currentId = useSelector((state) => state.logRecuders.current);
  const LOGcurrent = useSelector((state) => state.logRecuders.logs);

  // const currentLog = useSelector((state) => selectedLog(state, currentId));

  const currentLog = useSelector((state) =>
    state.logRecuders.logs?.filter(x=> x.id = "a05970e0-e861-11eb-93e2-cbd8769292fe")
  );

  // .find((x) => x.completed === true)

  useEffect(() => {
    if (currentId) {
      setName(currentId.name);
      setCompleted(currentId.completed);
    }
  }, [currentId]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
    } else {
      const updateLog = {
        id: currentId.id,
        name,
        completed,
      };
      dispatch(updateLogs(updateLog))
      setName("");
      setCompleted(false);
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <div className="row">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="message" className="active">
            Log Message
          </label>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={completed}
                  value={completed}
                  onChange={(e) => setCompleted(!completed)}
                />
                <span>Completed</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={(e) => onSubmit(e)}
          className="modal-close waves-effetc blue waves-light btn "
        >
          Enter
        </a>
      </div>
    </div>
  );
};


export default EditLogModal;
