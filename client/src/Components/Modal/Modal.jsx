import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "antd/dist/antd.min.css";
import style from "./Modal.module.css";
import RegistrPage from "../Registr/Registr";
import LoginPage from "../Login/Login";
import { useDispatch } from "react-redux";
import { changeBooleanStateAC } from "../../store/modal/actionCreators";

const ModalPage = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  dispatch(changeBooleanStateAC(modal2Open))
  // const modalPageHandler = () => {

  // }


  return (
    <div className={style.modaldiv}>
      <a
        
        type="primary"
        onClick={() => setModal2Open(true)}
        style={{ borderRadius: "10px" }}
      >
        Register | Login
      </a>

      <Modal
        footer={null}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <div className={style.allLinks}>
          <Link className={style.link} to="/">
            Registration
          </Link>
          <Link className={style.link} to="login">
            Sign In
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<RegistrPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Modal>
    </div>
  );
};
export default ModalPage;
