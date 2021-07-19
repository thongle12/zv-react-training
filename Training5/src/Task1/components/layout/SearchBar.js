import React, { useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { searchLogs } from "../../api/toDoApi";


const SearchBar = () => {
   const dispatch = useDispatch();

  const text = useRef("");

  const onChange = (e) => {
    dispatch(searchLogs(text.current.value));
  };

  return (
    <div>
      <nav style={{ marginBottom: "30px" }} className="blue">
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search Logs..."
                ref={text}
                onChange={onChange}
              />
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
