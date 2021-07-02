import React from 'react';
import './CloseButton.css'



export const CloseButton = ({ show, close }) => {
  return (
    <div className="modal-wrapper"
      style={{
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <span onClick={close} className="close-modal-btn">x</span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <h4>I am Modal</h4>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-cancel">Close</button>
        </div>
      </div>
    </div>
  )
};