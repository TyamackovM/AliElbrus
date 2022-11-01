import "antd/dist/antd.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/user/actionCreators";
import Navbar from "../src/Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import style from "./App.module.css";
import { Layout } from "antd";
import ModalPage from './Components/Modal/Modal';
import FooterPage from './Components/Footer/Footer';
import ItemCard from './Components/ItemCard/ItemCard';

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
      <div>
        <h3>Привет, {user.login}! </h3>
      </div>
        <Main />
   
        <Routes>
          <Route path='testcard' element={<ItemCard></ItemCard>}></Route>
        </Routes>
        <Link to='testcard'>testcard</Link>
        <FooterPage />   
      </div>
  );
}

export default App;
