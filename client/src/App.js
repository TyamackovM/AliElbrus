import 'antd/dist/antd.min.css';
import { Routes, Route, Link } from "react-router-dom";
import RegistrPage from "./Components/Registr/Registr";
import LoginPage from "./Components/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/user/actionCreators";
import Modal from "./Components/Modal/Modal";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import style from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    (async function () {
      const userFindBack = await fetch("http://localhost:4000/check", {
        method: "GET",
        credentials: "include",
      });
      const jsonFromBack = await userFindBack.json();
      dispatch(getUser(jsonFromBack));
    })();
  }, []);

  return (
    <div>
    <Navbar />
      <Modal />
      <div>
        <Link to="/registr" color="inherit">
          Регистрация
        </Link>
        <Link to="/login" color="inherit">
          Логин
        </Link>
        <h3>Привет, {user.login}! </h3>
      </div>
        <Routes>
          <Route path="/registr" element={<RegistrPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Main />
      <div className={style.container}>
      <Footer />
      </div>
    </div>

  );
}

export default App;
