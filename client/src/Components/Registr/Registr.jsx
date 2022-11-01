import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styles from "./Registr.module.css";
import { getUser } from "../../store/user/actionCreators";

const RegistrPage = () => {
  const [input, setInput] = useState({ login: '', email: '', password: ''});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = async(e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  console.log(input)

  const handleRegistr = async(e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/registr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input),
      credentials: 'include',
    });
    const toJson = await res.json();
    dispatch(getUser(toJson));
    navigate('/');
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      style={{border: '1px solid black', borderRadius: '8px', width: '670px', alignContent: 'center', alignItems: 'center', padding: '10px'}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="login"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input name="login" onChange={inputHandler} style={{width: '300px', borderRadius: '5px'}}/>
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input name="email" onChange={inputHandler} style={{width: '300px', borderRadius: '5px'}}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password name="password" onChange={inputHandler} style={{width: '300px', borderRadius: '5px'}}/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={handleRegistr} style={{width: '300px', height: '40px'}} type="primary" shape="round" htmlType="submit">
          Create account
        </Button>
      </Form.Item>
    </Form>
  );
};
export default RegistrPage;
