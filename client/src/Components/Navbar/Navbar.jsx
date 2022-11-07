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
import { changeBooleanStateAC } from "../../store/modal/actionCreators";
import { checkItemFromInputInDB } from "../../helpers/checkItemFromInputInDB";
import { useState } from "react";
const { Search } = Input;

// const user = useSelector((state) => state.user);
const Navbar = () => {
  const [items, setItems] = useState(null);
  const modal = useSelector((state) => state.modal);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchHandler = async (value) => {
    const searchResult = await checkItemFromInputInDB(value);

    navigate("/search", { state: { searchResult, searchWord: value } });
  };

  const handleLogout = async (e) => {
    const res = await fetch("http://localhost:4000/logout", {
      method: "GET",
      credentials: "include",
    });
    dispatch(logoutUser());
    navigate("/");
  };

  const modalPageHandler = (arg) => {
    dispatch(changeBooleanStateAC(arg));
  };

  return (
    < div className={styles.navbar}>
      <div className={styles.banner_container}>
        <Link href="#" className={styles.banner}></Link>
      </div>
      <Space className={styles.header} direction="vertical">
        <div className={styles.logo}>
          <Link to="/">
            <span className={styles.logo_base}>AliElbrus</span>
          </Link>
        </div>
        <Search
          name="item"
          className={styles.input}
          placeholder="I'm shopping for..."
          onSearch={searchHandler}
          enterButton
        />
        {!user.login ? (
          <Link
            style={{ display: "flex" }}
            onClick={() => modalPageHandler(true)}
          >
            <ShoppingCartOutlined className={styles.icon_cart} />
            <div className={styles.cartnum}>
              <span className={styles.span_number}>0</span>
              <Link onClick={() => modalPageHandler(true)}>Cart</Link>
            </div>
          </Link>
        ) : (
          <Link style={{ display: "flex" }} to="/account/cart">
            <ShoppingCartOutlined className={styles.icon_cart} />
            <div className={styles.cartnum}>
              <span className={styles.span_number}>0</span>
              <Link to="/account/cart">Cart</Link>
            </div>
          </Link>
        )}
        {!user.login ? (
          <Link
            style={{ display: "flex" }}
            onClick={() => modalPageHandler(true)}
          >
            <HeartOutlined className={styles.icon_heart} />
            <Link onClick={() => modalPageHandler(true)}>
              Wish <br /> List
            </Link>
          </Link>
        ) : (
          <Link style={{ display: "flex" }} to="/account/wish-list">
            <HeartOutlined className={styles.icon_heart} />
            <Link to="/account/wish-list">
              Wish <br /> List
            </Link>
          </Link>
        )}
        <UserOutlined className={styles.icon_cart} />
        <div className={styles.sign_join_my}>
          <div className={styles.sign_login}>
            {!user.login ? (
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
    </>
  );
};
export default Navbar;
