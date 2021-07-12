import React, { Children, useState } from "react";

import "../CloseButton/CloseButton.css";

function Modal({ show, close,children }) {
  return (
    <div>
      <div
        className="modal-wrapper"
        style={{
          opacity: show ? "1" : "0",
        }}
      >
        <div className="modal-header">
          <span onClick={close} className="close-modal-btn">
            x
          </span>
        </div>
        <div className="modal-content">
          <div className="modal-footer">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
