import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

PrivateRoute.propTypes = {};

function PrivateRoute({ children, ...rest }) {
  const token = useSelector((state) => state.auth.token);

  return (
    <Route
      {...rest}
      render={() => (token ? children : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
