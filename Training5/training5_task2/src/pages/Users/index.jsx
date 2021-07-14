import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu, notification } from "antd";
import { getUsers } from "../../redux/actionCreators/users";
import Preloader from "../../layout/Preloader";
const { Content, Sider } = Layout;

const UserPage = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [otherUsers,setOtherUsers ] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const usersReduducer = useSelector((state) => state.users);
  const {users, loading, error} = usersReduducer;

  useEffect(() => {
    if (users) {
      const otherUser = users.filter(
        (user) => user.role !== "Admin"
      );
      setOtherUsers([...otherUser]);
    }
  }, [error,users]);

  if (loading || users === null) {
    return <Preloader />;
  }
  if (!users) {
    return <h3>Users Page</h3>;
  }

  return (
    <Layout>
      <Content>
        <Layout>
          <Sider className="site-layout-background" width={200}>
            <Menu style={{ height: "100%" }}>
              {otherUsers.map(({ id, fullName }) => (
                <Menu.Item key={id}>
                  <Link to={`/app/users/${id}`}>{fullName}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
          <Content
            style={{ padding: "0 24px", minHeight: 280, background: "white" }}
          >
            {children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};

export default UserPage;
