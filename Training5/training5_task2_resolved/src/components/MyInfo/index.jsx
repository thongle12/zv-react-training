import jwtDecode from "jwt-decode";
import React from 'react';
import { useSelector } from 'react-redux';
import { getToken } from "../../redux/userSelector";
import UserDetail from '../UserDetail';

function MyInfo() {

    const token = useSelector(getToken);
    var decoded = jwtDecode(token);
    
    if(decoded){
        return <UserDetail user={decoded}/>;
    }
 
    return (
        <div>
            <p>My Infor Page</p>
        </div>
    );
}

export default MyInfo;