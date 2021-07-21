import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getUsers } from "../../action/users";
import { Button, Menu, Layout } from "antd";
import jwtDecode from "jwt-decode";
import UserDetail from "../UserDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const { Header, Content, Sider } = Layout;

function Users(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const token = useSelector((state) => state.auth.token);
  var decoded = jwtDecode(token);

  const fullUsersList = useSelector((state) => state.users.users);
  const anotherUsersList = fullUsersList.filter(
    (user) => user.id !== decoded.id
  );

  return (
    <Menu
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      {anotherUsersList.map((user, index) => (
        <Layout>
          <Sider>
            <Menu style={{ minHeight: 600 }}>
              <Menu.Item key={index}> <Link to={`/app/users/${user.id}`}>{user.fullName}</Link></Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ minHeight: "600px" }}>{props.children}</Content>
          </Layout>
        </Layout>
      ))}
    </Menu>
  );
}

export default Users;
