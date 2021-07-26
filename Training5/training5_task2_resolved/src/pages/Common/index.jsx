import { Button, Layout, Menu } from "antd";
import { Footer } from "antd/lib/layout/layout";
import React from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../action/login";
import { useHistory } from "react-router";

const { Header, Content, Sider } = Layout;

function Common(props) {
  const dispatch = useDispatch();

  const onClickLogOut = () => {
    dispatch(loginSuccess({ token: "" }));
  };

  const history = useHistory();

  const onClickUsers = () => {
    history.push("/app/users");
  };
  const onClickHome = () => {
    history.push("/app");
  };
  const onClickMyInfo = () => {
    history.push("/app/my-info");
  };


  return (
    <div>
      <Layout>
        <Header style={{ minHeight: "70px" }} className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="0">ZIGVY LOGO</Menu.Item>
            <Menu.Item key="1">
              <Button type="primary" onClick={onClickLogOut}>
                log out
              </Button>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout style={{ marginTop: "10px" }}>
          <Sider>
            <Menu defaultSelectedKeys={["1"]} style={{ minHeight: 600 }}>
              <Menu.Item key="1">
                <Button onClick={onClickHome} type="link">
                  Home
                </Button>
              </Menu.Item>
              <Menu.Item key="2">
                <Button onClick={onClickUsers} type="link">
                  Users
                </Button>
              </Menu.Item>
              <Menu.Item key="9">
                <Button type="link" onClick={onClickMyInfo}>My Info</Button>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ minHeight: "600px" }}>{props.children}</Content>
          </Layout>
        </Layout>

        <Footer style={{ textAlign: "center" }}>ZIGVY CORP</Footer>
      </Layout>
    </div>
  );
}

export default Common;

