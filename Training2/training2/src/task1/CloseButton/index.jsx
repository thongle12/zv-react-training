import React from "react";
import "./CloseButton.css";

export const CloseButton = ({ close }) => {
  return (
    <div>
      <div className="modal-footer">
        <button onClick={close} className="btn-cancel">
          Close
        </button>
      </div>
    </div>
  );
};
