import PropTypes from 'prop-types';
import React from "react";
import "./index.css";

UserDetail.propTypes = {
    user: PropTypes.object,
};

function UserDetail({user}) {
  const { fullName, email, password, role, id } = user;

  return (
    <div className="detail__content">
      <p>fullName: {fullName}</p>
      <p>email: {email} </p>
      <p>password:{password} </p>
      <p>id: {id}</p>
      <p>role:{role} </p>
    </div>
  );
}

export default UserDetail;

