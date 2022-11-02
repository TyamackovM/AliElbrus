import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "antd/dist/antd.min.css";
import style from "./Modal.module.css";
import RegistrPage from "../Registr/Registr";
import LoginPage from "../Login/Login";

const ModalPage = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={style.modaldiv}>
      <a className={style.adecor}
        
        type="primary"
        onClick={() => setModal2Open(true)}
      >
        Register | Login
      </a>

      <Modal
        className={style.modal}
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
