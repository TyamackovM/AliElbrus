import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "antd/dist/antd.min.css";
import styles from "./Modal.module.css";

const App = () => {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div
    // className={styles.modaldiv}
    >
      <Button
        type="primary"
        onClick={() => setModal2Open(true)}
        style={{ borderRadius: "10px" }}
      >
        Register/Login
      </Button>

      <Modal
        title="Vertically centered modal dialog"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        style={{ borderRadius: "10px" }}
      >
        {/* <Link to='registr'>Registration</Link>
        <Link to='login'>Sign In</Link> */}
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
};
export default App;
