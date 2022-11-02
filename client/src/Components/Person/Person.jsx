import React, { useState } from "react";
import {
  UserOutlined,
  ProfileOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { useSelector } from "react-redux";
import { Button } from "antd";
import style from "./Person.module.css";
import ModalPage from "../Modal/Modal";

export default function Person() {
  const user = useSelector((state) => state.user);

  return user.login ? (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <Avatar
          style={{ backgroundColor: "#a622ffb9" }}
          icon={<UserOutlined />}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontWeight: "bold", fontSize: "17px" }}>Hi, {user.login}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <UserOutlined style={{ fontSize: "20px", marginLeft: "6px" }} />
        <ProfileOutlined style={{ fontSize: "20px", marginRight: "2px" }} />
        <MessageOutlined style={{ fontSize: "20px", marginRight: "15px" }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <p style={{ fontSize: "13px" }}>Account</p>
        <p style={{ fontSize: "13px" }}>Orders</p>
        <p style={{ fontSize: "13px" }}>Messages</p>
      </div>
    </div>
  ) : (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <Avatar
          style={{ backgroundColor: "#a622ffb9" }}
          icon={<UserOutlined />}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ fontWeight: "bold", fontSize: "17px" }}>Welcome to AliElbrus</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Button className={style.btnClick}  type="primary" shape="round" htmlType="submit">
          <ModalPage/>
        </Button>
      </div>
    </div>
  );
}
