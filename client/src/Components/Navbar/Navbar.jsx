import styles from "../Navbar/Navbar.module.css";
import {
  AudioOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";

import React from "react";
import { Link } from "react-router-dom";
import ModalPage from "../Modal/Modal";
import { useSelector } from "react-redux";
const { Search } = Input;

// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );
const onSearch = (value) => console.log(value);
// const user = useSelector((state) => state.user);
const Navbar = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className={styles.banner_container}>
        <a href="#" className={styles.banner}></a>
      </div>
      <Space className={styles.header} direction="vertical">
        <div className={styles.logo}>
          <span className={styles.logo_base}>AliElbrus</span>
        </div>
        <Search
          className={styles.input}
          placeholder="I'm shopping for..."
          onSearch={onSearch}
          enterButton
        />
        <ShoppingCartOutlined className={styles.icon_cart} />
        <div className={styles.cartnum}>
          <span className={styles.span_number}>0</span>
          <span>Cart</span>
        </div>
        <HeartOutlined className={styles.icon_heart} />
        <span>
          Wish <br /> List
        </span>
        <UserOutlined className={styles.icon_cart} />
        <div className={styles.sign_join_my}>
          <div className={styles.sign_login}>
            { !user.login ? (
              <ModalPage />
            ) : (
              user.login
            )}
          </div>
          <div>
            <span>My AliElbrus</span>
          </div>
        </div>
      </Space>
    </>
  );
};
export default Navbar;
