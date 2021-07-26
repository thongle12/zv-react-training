import { notification } from "antd";
import React, { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getAllIdUsers, getAllUsers } from "../../redux/userSelector";
import UserDetail from "../UserDetail";

function FilteredUser() {
  let { idParam } = useParams();
  let history = useHistory();

  const idList = useSelector(getAllIdUsers);

  const filteredUserList = useMemo(() => {
    const checkParam = (id) => {
      return idParam === id;
    }
    return idList.filter( x => checkParam(x))
  },[idParam])

  useEffect(() => {
    if(filteredUserList.length === 0){
      notification.open({
        message: 'user not found'
      });
      history.push("/app/users")
    }
  }, [idParam])
  
  const userList = useSelector(getAllUsers);
  const filteredDetailUser = userList.find(x => x.id === filteredUserList.toString())

  return (
    <div>
      {filteredUserList.map((index) => (
        <UserDetail user={filteredDetailUser} key={index} />
      ))}
    </div>
  );
}

export default FilteredUser;
