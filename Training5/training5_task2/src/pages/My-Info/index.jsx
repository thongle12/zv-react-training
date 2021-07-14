import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BasicLayout from "../../layout";
import DetailPage from "../../layout/UserDetail";
import { getUser } from "../../redux/actionCreators/users";
import Preloader from "../../layout/Preloader";

const MyInfoPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  
  const user = useSelector((state) => state.users);

  
  if (user.loading || user.user === null) {
    return <Preloader />;
  }

  if (user.user) {
    return (
      <DetailPage
        user={user.user}
      />
    );
  }
  return <h3>My Info page</h3>;
};

export default MyInfoPage;
