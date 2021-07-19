import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { throttle } from "lodash";
import { debounce } from "lodash";
Task1.propTypes = {};

function Task1(props) {
  const [joke, setJoke] = useState("");

  const URL = "https://official-joke-api.appspot.com/random_joke";

  useEffect(() => {
    handleGetMoreJoke();
  }, []);

  const handleGetMoreJoke = () => {
    (() => {
      try {
        fetch(URL)
          .then((response) => response.json())
          .then((data) => {
            //id, type is not used
            const { id, type, ...newData } = data;
            setJoke(newData);
            console.log("joke", joke);

          });
      } catch (error) {
        console.log("fail to fetch joke list", error);
      }
    })();
  };

  //throttle from lodash
  //Throttling enforces a maximum number of times a function can be called over time

  const handleButtonThrottled = throttle(handleGetMoreJoke, 1000);
  //debounce from lodash
  //Debouncing enforces that a function will not be called again until a certain 
  //amount of time has passed since its last call.

  const handleButtonDebounced = debounce(handleGetMoreJoke, 1000);

  return (
    <div>
      <p> {joke.setup} </p>
      <p> {joke.punchline} </p>
      <button onClick={handleButtonDebounced}>Get more joke</button>
    </div>
  );
}

export default Task1;
