

import React from "react";
import PropTypes from "prop-types";

DetailPage.propTypes = {
  user: PropTypes.object,
};

function DetailPage({ user }) {
  const { fullName, email, password, role,id } = user;
    //Trang chi tiet nhan props
  return (
    <div className="detail-page">
      <p> Full name: {fullName}</p>
      <p> Email: {email}</p>
      <p> Password: {password}</p>
      <p> Id: {id}</p>
      <p> Role: {role}</p>
    </div>
  );
}

export default DetailPage;
