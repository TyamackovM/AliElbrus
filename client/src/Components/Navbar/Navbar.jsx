import styles from "../Navbar/Navbar.module.css"
import { AudioOutlined, ShoppingCartOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Space,} from 'antd';

import React from 'react';
const { Search } = Input;
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );
const onSearch = (value) => console.log(value);
const Navbar = () => (
  <Space className={styles.header} direction="vertical">
   
    <span>OUR LOGO</span>
    <Search className={styles.input} placeholder="I'm shopping for..." onSearch={onSearch} enterButton />
    <ShoppingCartOutlined className={styles.icon_cart} />
    <div className={styles.cartnum}>
    <span className={styles.span_number}>0</span>
    <span>Cart</span>
    </div>
    <HeartOutlined className={styles.icon_heart} />
    <span>Wish <br /> List</span>
    <UserOutlined className={styles.icon_cart} />
    <div className={styles.sign_join_my} >
    <div className={styles.sign_login}>
    <a href="#" className={styles.header_link} >Sign in</a>
    <span className={styles.devider} > | </span>
    <a href="#" className={styles.header_link}>Join</a>
    </div>
    <div>
    <span>My AliElbrus</span>
    </div>
    </div>

  </Space>
);
export default Navbar;