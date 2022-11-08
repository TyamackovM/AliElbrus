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
import SettingsPerson from "./Components/SettingsPerson/SettingsPerson";
import LoginPage from "./Components/Login/Login";
import Account from "./Components/Account/Account";
import WishList from "./Components/WishList/WishList";
import Orders from "./Components/Orders/Orders";
import Cart from "./Components/Cart/Cart";
import Chat from "./Components/Chat/Chat";
import AllCards from "./Components/Cards/AllCards";
import SearchRenderAllCards from "./Components/Cards/SearchRenderAllCards";
import AdminCabinet from "./Components/AdminCabinet/AdminCabinet";



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
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Main />} />
          <Route path='/search' element={<SearchRenderAllCards />} />

          <Route path='testcard' element={<ItemCard></ItemCard>}></Route>
          <Route path='chat' element={<Chat />} />

          <Route path='/admin-cabinet' element={<AdminCabinet/>}/>
          <Route path='/category/:id' element={<AllCards></AllCards>}></Route>

          {/* <Route path='/account' element={<SettingsPerson />} /> */}
          <Route path='/testcard' element={<ItemCard/>}/>
           <Route path='/account' element={<SettingsPerson />}>
            <Route path='info' element={<Account />} />
            <Route path='wish-list' element={<WishList />} />
            <Route path='orders' element={<Orders />} />
            <Route path='cart' element={<Cart />} />
            <Route path='chat' element={<Chat />} />
          </Route>      
        </Routes>
        
        <Link to='testcard'>testcard</Link>
        <FooterPage />   
      </div>
  );
}

export default App;
