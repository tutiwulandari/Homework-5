import React, { useState, useCallback } from "react";
import { Form, Input, Button, Select } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
import { useHistory } from "react-router-dom";
import BRI from "../../assets/image/BRI2.png";


const { Option } = Select;

const styleButtton = {
  backgroundColor: "#292961",
  borderRadius: "10px",
  marginTop: "10px",
};

const Login = () => {

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [selectedUserLevel, setSelectedUserLevel] = useState("customer");

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const handleSubmit = useCallback(() => {
    // setAuthorizedValue(true, selectedUserLevel);
    history.push("/home");
  }, [history]);

  const handleSelectedUserLevel = useCallback( (value) => {
    setSelectedUserLevel(`${value}`);
  }, []);
  

  const handleChange = useCallback((e) => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "username":
        setUsername(value);
        setData({ ...data, [name]: value });
        break;
      case "password":
        setPassword(value);
        setData({ ...data, [name]: value });
        break;
      default:
    }
  }, [username, password, data]);

  console.log("Ini data", data);
  console.log("INI ROLE", selectedUserLevel);


  return (
    <div className="outer-login">
      <div className="inner-login">
        <div className="logo" style={{ marginTop: "-50px", width: "200px" }}>
          <img src={BRI} alt="logo" />
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          style={{marginTop:"-30px"}}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
              
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
