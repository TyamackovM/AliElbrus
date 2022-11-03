import React, { useState } from "react";
import {
  UserOutlined,
  ProfileOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Avatar, Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import style from "./Person.module.css";
import ModalPage from "../Modal/Modal";
import { Link } from "react-router-dom";
import { changeBooleanStateAC } from "../../store/modal/actionCreators";

export default function Person() {
  const user = useSelector((state) => state.user);
  const modal = useSelector((state) => state.modal);

  const dispatch = useDispatch()

  const modalPageHandler = (arg) => {    
    dispatch(changeBooleanStateAC(arg))
  }


  return user.login ? (
    <div >
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
      <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: '7px' }}>
        <Link to='/account/info' style={{ fontSize: "13px" }}>Account</Link>
        <Link to='account/orders' style={{ fontSize: "13px" }}>Orders</Link>
        <Link style={{ fontSize: "13px" }}>Messages</Link>
      </div>
      <div style={{width: '190px', height: '180px', display: 'flex', justifyContent: 'center'}}>
        <div className={style.bottomBlock}>
          <div className={style.bottomFirst}>
            <p className={style.exc}>Exclusive offers</p>
            <p className={style.newMem}>Just for new AliElbrus members!</p>
          </div>
          <div className={style.bottomSecond}></div>
          <div className={style.bottomThird}>

          </div>
        </div>
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
      <Button onClick={() => modalPageHandler(true)} className={style.btnClick}   shape="round" htmlType="submit">
          {/* <ModalPage/> */}
          Registr | Login
        </Button>
      </div>
    </div>
  );
}
