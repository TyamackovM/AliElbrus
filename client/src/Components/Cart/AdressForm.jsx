import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import style from "../Registr/Registr.module.css";
import { getUser } from "../../store/user/actionCreators";
import { changeBooleanStateAC } from "../../store/modal/actionCreators";
import { Radio } from "antd";

const AdressForm = () => {
  const [input, setInput] = useState({ login: "", email: "", password: "" });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputHandler = async (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleRegistr = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/registr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
      credentials: "include",
    });
    const toJson = await res.json();
    dispatch(getUser(toJson));
    // dispatch(changeBooleanStateAC(true))
    navigate("/");
  };

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <Form
      name="basic"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      initialValues={{
        remember: true,
      }}
      //   onFinish={onFinish}
      //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your county!",
            },
          ]}
        >
          <Input
            placeholder="County"
            name="County"
            onChange={inputHandler}
            style={{ width: "300px", borderRadius: "5px" }}
          />
        </Form.Item>

        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your city!",
            },
          ]}
        >
          <Input
            placeholder="City"
            name="City"
            onChange={inputHandler}
            style={{ width: "300px", borderRadius: "5px" }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input
            placeholder="Address"
            name="Address"
            onChange={inputHandler}
            style={{ width: "300px", borderRadius: "5px" }}
          />
        </Form.Item>

        <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>pay upon receipt</Radio>
          <Radio value={2}>pay now</Radio>
        </Radio.Group>

      </div>

      <Button
        className={style.btnReg}
  
        style={{ width: "300px", height: "40px", margin: '17px' }}
        shape="round"
        htmlType="submit"
      >
        Make an order
      </Button>
    </Form>
  );
};
export default AdressForm;
