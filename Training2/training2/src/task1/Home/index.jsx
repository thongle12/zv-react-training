import React, { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import { CloseButton } from "../CloseButton";

function HomeTask1() {
  const [show, setShow] = useState(false);

  const closeModalHandler = () => setShow(false);

  return (
    <div>
      <div>
        <button onClick={() => setShow(true)} className="btnOpenModal">
          Open Modal
        </button>
        <Modal show={show} close={closeModalHandler}> 
            <p>Hello</p>
            <CloseButton close={closeModalHandler} />
        </Modal>
      </div>
    </div>
  );
}

export default HomeTask1;
