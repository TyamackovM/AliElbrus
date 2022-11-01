import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUser } from "../../store/user/actionCreators";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: '', password: ''});

  const inputHandler = async(e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const handleLogin = async(e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(input),
      credentials: 'include',
    });
    const toJson = await res.json();
    if (toJson === 'PasswordNotDone') alert('Incorrect password')
    else if (toJson === 'EmailNotDone') alert('Incorrect email')
    else {
      dispatch(getUser(toJson));
      navigate('/');
    }
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
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

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
        <Button onClick={handleLogin} style={{width: '300px', height: '40px'}} type="primary" shape="round" htmlType="submit">
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};
export default LoginPage;
