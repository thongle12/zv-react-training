import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import DetailPage from "../../layout/UserDetail";

const UserListPage = () => {
  const { id } = useParams();
  const [myUser, setMyUser] = useState({});
  
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    if (id) {
      const newUser = users.find((nUser) => nUser.id === id);
      setMyUser({ ...newUser });
    }
  }, [id, users]);

  return <DetailPage user={myUser} />;
};

export default UserListPage;
