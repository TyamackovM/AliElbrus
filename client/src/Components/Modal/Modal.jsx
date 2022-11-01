import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "antd/dist/antd.min.css";
import style from "./Modal.module.css";
import RegistrPage from "../Registr/Registr";
import LoginPage from "../Login/Login";

const App = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div
    className={style.modaldiv}
    >
      <Button
        type="primary"
        onClick={() => setModal2Open(true)}
        style={{ borderRadius: "10px" }}
      >
        Register/Login
      </Button>

      <Modal
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        style={{ borderRadius: "50px" }}
      >
        <div className={style.allLinks}>
          <Link className={style.link} to="registr">
            Registration
          </Link>
          <Link className={style.link} to="login">
            Sign In
          </Link>
        </div>
        <Routes>
          <Route path="/registr" element={<RegistrPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Modal>
    </div>
  );
};
export default App;
