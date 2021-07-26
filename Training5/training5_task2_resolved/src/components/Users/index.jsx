import { Layout, Menu } from "antd";
import jwtDecode from "jwt-decode";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link
} from "react-router-dom";
import { getUsers } from "../../action/users";
import { getAllUsers, getToken } from "../../redux/userSelector";

const { Content, Sider } = Layout;

function Users({children}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const token = useSelector(getToken);
  var decoded = jwtDecode(token);

  const userList = useSelector(getAllUsers);
  const filteredUserList = userList.filter(
    (user) => user.id !== decoded.id
  );

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      {filteredUserList.map((user, index) => (
        <Layout key={index}>
          <Sider>
            <Menu style={{ minHeight: 600 }}>
              <Menu.Item key="1"> <Link to={`/app/users/${user.id}`}>{user.fullName}</Link></Menu.Item>
            </Menu>
          </Sider>
          {children}
        </Layout>
      ))}
    </Menu>
  );
}

export default Users;
