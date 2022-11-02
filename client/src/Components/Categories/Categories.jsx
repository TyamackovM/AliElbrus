import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import React from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Women's Fashion", 'sub1', <MailOutlined />, [
    getItem('Dress', 'dress'), 
    getItem('Oйцайца', '2'),
    // getItem('Item 2', null, null, [getItem('ыыыыыы', '3'), getItem('фыайц 4', '4')], 'group'),
  ]),
  getItem("Men's Fashion", 'sub2', <AppstoreOutlined />, [
    getItem('файафыа', '5'),
    getItem('йцфыафыа', '6'),
    
  ]),
  getItem('Phones & Telecommunications', 'sub3', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
  getItem('Computer, Office & Security', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
    getItem('Consumer Electronics', 'sub5', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
    getItem('Jewelry & Watches', 'sub6', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
    getItem('Home, Pet & Appliances', 'sub7', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
];
const onClick = async (e) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ee1ce809e1msh50af60dd35dd5a6p15bdd0jsnb22ba520ac55',
      'X-RapidAPI-Host': 'magic-aliexpress1.p.rapidapi.com'
    }
  };
  
  const res = await fetch(`https://magic-aliexpress1.p.rapidapi.com/api/products/search?name=${e.key}`, options)
   const result = await res.json();
   console.log('RESULT=====', result)
};
const App = () => (
  <Menu
    onClick={onClick}
    style={{
      width: 200,
      borderRadius: '5px'
    }}
    mode="vertical"
    items={items}
    
  />
);
export default App;
