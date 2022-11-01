import 'antd/dist/antd.min.css';
import { Routes, Route, Link } from "react-router-dom";
import RegistrPage from "./Components/Registr/Registr";
import LoginPage from "./Components/Login/Login";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./store/user/actionCreators";
import Navbar from "../src/Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import style from "./App.module.css";
import { Layout } from "antd";
import ModalPage from './Components/Modal/Modal';
import FooterPage from './Components/Footer/Footer';
import ItemCard from './Components/ItemCard/ItemCard';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const { Header, Footer, Sider, Content } = Layout;

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
    {/* <Routes>
      <Route path="/registr" element={< />} 
    </Routes> */}
      <ModalPage />
      <div>
        <h3>Привет, {user.login}! </h3>
      </div>
      <Layout>
          <Sider>Sider</Sider>
          <Layout>
            <Content>Content</Content>
            <Layout>
              <Sider>Sider</Sider>
            </Layout>
          </Layout>
        </Layout>

        <Main />
        <Footer /> 
        <Routes>
          <Route path='testcard' element={<ItemCard></ItemCard>}></Route>
        </Routes>
        <Link to='testcard'>testcard</Link>
        <FooterPage />   
      </div>


  );
}

export default App;
