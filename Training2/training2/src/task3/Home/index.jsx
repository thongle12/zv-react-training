/* 

- Task 3
  - Given an input that allow a user to enter a number and a button with `Start` label
  - When a user press `Start`
    - If input is empty, display an error tell a user that: 'Please input a number'
    - If input is not a valid number, display an error tell a user that: 'Invalid input. Must be a number'
    - If input is a negative number, display an error tell a user that: 'Number must be greater than 0'
    - Otherwise, render a component that will countdown the given number from inputed number down to zero
  - User is able to stop the countdown progress with `Stop` button.
  - The `Stop` button should only be shown when the `Start` button is pressed
  - Source code must be stored in `Training2/src/task3` folder

*/

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CountDown from "../CountDown";
import "./home.css";
Home.propTypes = {};

function Home(props) {
  const [value, setValue] = useState("");
  const [valueInput, setValueInput] = useState();
  const [stopCount, setStopCount] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    e.preventDefault();
    setValue(value);
  };

  const handleValueInput = () => {
    if (!value) {
      document.getElementById("errorId").innerHTML = "Please input a number";
    } else if (value % 1 !== 0) {
      document.getElementById("errorId").innerHTML = "Invalid input. Must be a number";
    } else if (value <= 0) {
      document.getElementById("errorId").innerHTML = "Number must be greater than 0";
    } else {
      document.getElementById("errorId").innerHTML = "";
      // Otherwise, render a component that will countdown the given number from inputed number down to zero
      setValueInput(value * 1);
    }
  };

  useEffect(() => {
    if(stopCount===false){
        let myInterval = setInterval(() => {
            if (valueInput > 0) {
              setValueInput(valueInput - 1);
            }
            if (valueInput === 0) {
              clearInterval(myInterval);
            }
          }, 1000);
          return () => {
            clearInterval(myInterval);
          };
    }
   
  });

  const stopCountHandle = () => setStopCount(!stopCount);

  return (
    <>
      <div className="home-section">
        <h1>Hello</h1>
        <div>
          <div>
            <input type="text" onChange={handleChange} id="idInput" />
            <br />
            <span id="errorId"> </span>
            <br />
            <div className="btn-start">
              <button onClick={handleValueInput}> Start </button>
            </div>
            <br />
            <CountDown value={valueInput} stop={stopCountHandle}  />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
