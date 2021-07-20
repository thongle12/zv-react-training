import PropTypes from 'prop-types';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLogs } from "../../api/logApi";


EditLogModal.propTypes = {
  closeModal: PropTypes.func,
  currentId: PropTypes.string,
};

function EditLogModal({ closeModal, currentId }) {
  const dispatch = useDispatch();

  const selectedLoading = (state) => state.logRecuders.isUpdating;
  const loading = useSelector(selectedLoading);

  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  const currentLog = useSelector((state) =>
    state.logRecuders.logs.find((x) => x.id === currentId)
  );

  useEffect(() => {
    if (currentLog) {
      setName(currentLog.name);
      setCompleted(currentLog.completed);
    }
  }, [currentLog]);

  const closeTodoModal = () => {
    closeModal();
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || loading) {
    } else {
      const updateLog = {
        id: currentLog.id,
        name,
        completed,
      };
      dispatch(updateLogs(updateLog));
      setName("");
      setCompleted(false);
      closeModal();
    }
  };
  return (
    <form>
      <div className="form-group">
        <input
          type="text"
          name="todo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
      <button className="btn" onClick={onSubmit}>
        Save
      </button>
      <button className="btn" onClick={closeTodoModal}>
        Cancel
      </button>
    </form>
  );
}

export default EditLogModal;
