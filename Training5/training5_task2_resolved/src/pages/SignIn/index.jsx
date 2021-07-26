import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../action/login";
import { getToken } from "../../redux/userSelector";

SignIn.propTypes = {};

function SignIn(props) {
  const [loginInfor, setLoginInfor] = useState({
    email: "john@doe.com",
    password: "zigy123",
  });

  let history = useHistory();

  const dispatch = useDispatch();

  const token = useSelector(getToken);

  // useEffect(() => {
  //   if (token) {
  //     // history.push("/app");
  //   }
  // }, [token]);

  const onFinish = () => {
    dispatch(login(loginInfor));
  };

  //   const onFinishFailed = (errorInfo: any) => {
  //     console.log("Failed:", errorInfo);
  //   };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          onChange={(e) =>
            setLoginInfor((prevState) => ({
              ...prevState,
              email: e.target.value,
            }))
          }
        />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password
          onChange={(e) =>
            setLoginInfor((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignIn;
