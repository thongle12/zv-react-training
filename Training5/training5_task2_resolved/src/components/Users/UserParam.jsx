import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import UserDetail from '../UserDetail';

UserParam.propTypes = {
    
};

function UserParam(props) {
    let { id } = useParams();

    const userInfo = useSelector((state) =>
      state.users.users.find(x => x.id ===id))

      console.log(userInfo)


    return (
        <UserDetail user={userInfo}/>
    );
}

export default UserParam;