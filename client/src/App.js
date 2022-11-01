import { Routes, Route, Link } from "react-router-dom";
import 'antd/dist/antd.min.css';
import RegistrPage from "./Components/Registr/Registr";
import LoginPage from "./Components/Login/Login";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getUser } from "./store/user/actionCreators";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)

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
    <>
    <Link to='/registr' color="inherit">Регистрация</Link>
    <Link to='/login' color="inherit">Логин</Link>
    <h3>Привет, {user.login}! </h3>
    <Routes>
      <Route path="/registr" element={<RegistrPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
    </>
  );
}

export default App;
