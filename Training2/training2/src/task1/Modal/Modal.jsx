import React, { useState } from "react";
import PropTypes from "prop-types";
import { CloseButton } from "../CloseButton";

Modal.propTypes = {};

function Modal(props) {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <div>
      <div>
        <button onClick={() => setShow(true)} className="btnOpenModal">
          Open Modal
        </button>
        <CloseButton show={show} close={closeModalHandler} />
      </div>
    </div>
  );
}

export default Modal;
