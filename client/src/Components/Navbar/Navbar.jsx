import styles from "../Navbar/Navbar.module.css";
import {
  AudioOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ModalPage from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/user/actionCreators";
const { Search } = Input;

const onSearch = (value) => console.log(value);
// const user = useSelector((state) => state.user);
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    const res = await fetch('http://localhost:4000/logout', {
      method: 'GET',
      credentials: 'include',
    });
    dispatch(logoutUser());
    navigate('/');
  }

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
              <Link onClick={handleLogout}>Logout</Link>
            )}
          </div>
          <div>
            <span>My AliElbrus</span>
          </div>
        </div>
      </Space>
        <hr style={{background: '#959595b9'}}/>
    </>
  );
};
export default Navbar;
