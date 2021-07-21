import jwtDecode from "jwt-decode";
import React from 'react';
import { useSelector } from 'react-redux';
import UserDetail from '../UserDetail';



function MyInfo(props) {

    const token = useSelector((state) => state.auth.token);
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