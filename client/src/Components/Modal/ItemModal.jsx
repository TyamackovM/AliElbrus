import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import "antd/dist/antd.min.css";
import style from "./Modal.module.css";
import RegistrPage from "../Registr/Registr";
import LoginPage from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { changeBooleanStateAC } from "../../store/modal/actionCreators";

const ModalPage = () => {
  // const [modal2Open, setModal2Open] = useState(false);
  const modal = useSelector((state) => state.modal)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const modalPageHandler = (arg) => {    
    dispatch(changeBooleanStateAC(arg))
  }


  return (
    <div className={style.modaldiv}>
      <p className={style.adecor}
        
        type="primary"
        onClick={() => modalPageHandler(true)}
      >
        Register | Login
      </p>

      <Modal
        className={style.modal}
        footer={null}
        cancelButtonProps={{ style: { display: 'none' } }}
        okButtonProps={{ style: { display: 'none' } }}
        centered
        open={modal}
        // onOk={() => setModal2Open(false)}
        onCancel={() => modalPageHandler(false)}
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