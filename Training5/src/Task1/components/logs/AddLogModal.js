import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLogs } from "../../api/toDoApi";

const modalStyle = {
  width: "75%",
  height: "75%",
};
const AddLogModal = () => {
   const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      //khong add
    } else {
      const newLog = {
        name,
        completed,
      };
      dispatch(addLogs(newLog));
      // clear 
      setName("");
      setCompleted(false);
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
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
                <span>Not Completed</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={(e) => onSubmit(e)}
          className="modal-close waves-effect blue waves-light btn "
        >
          Enter
        </a>
      </div>
    </div>
  );
};



export default AddLogModal;
