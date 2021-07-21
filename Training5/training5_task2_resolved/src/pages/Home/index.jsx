import { Layout } from "antd";
import React from "react";
import { useHistory } from "react-router";

const { Content } = Layout;

Home.propTypes = {};

function Home(props) {
  const history = useHistory();
  const onClickUsers = () => {
    console.log("hello users");
    history.push("/app/123");
  };
  return (
    <Content style={{ margin: "0 16px" }}>
      <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
        Welcome Home 1
      </div>
    </Content>
  );
}

export default Home;
