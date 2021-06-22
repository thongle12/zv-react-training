import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./countdown.css";

/**
 * 
 * - Otherwise, render a component that will countdown the given number from inputed number down to zero
  - User is able to stop the countdown progress with `Stop` button.
  - The `Stop` button should only be shown when the `Start` button is pressed
  - Source code must be stored in `Training2/src/task3` folder
 */

CountDown.propTypes = {
  value: PropTypes.number,
  stop: PropTypes.func,
};

function CountDown({ value, stop }) {
    

  return (
    <div>
      {!value ? null : (
        <>
          <button onClick={stop} className="btn-stop">STOP</button>
          <h1> {value}</h1>
        </>
      )}
    </div>
  );
}

export default CountDown;
