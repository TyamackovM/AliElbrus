import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

import React from 'react';
import { useState } from 'react';
import AllCards from '../Cards/AllCards';
import { fetchRequest } from './fetchRequest';

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
    getItem('Dress', '1'),
    getItem('Jeans', 'woman-jeans'),
    // getItem('Item 2', null, null, [getItem('ыыыыыы', '3'), getItem('фыайц 4', '4')], 'group'),
  ]),
  getItem("Men's Fashion", 'sub2', <AppstoreOutlined />, [
    getItem('T-shirts', 'shirts'),
    getItem('Jeans', 'men-jeans'),
  ]),
  getItem('Phones & Telecommunications', 'sub3', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 11', '11'),
  ]),
  getItem('Computer, Office & Security', 'sub4', <SettingOutlined />, [
    getItem('Option 12', '12'),
    getItem('Option 13', '13'),
  ]),
  getItem('Consumer Electronics', 'sub5', <SettingOutlined />, [
    getItem('Option 14', '14'),
    getItem('Option 15', '15'),
  ]),
  getItem('Jewelry & Watches', 'sub6', <SettingOutlined />, [
    getItem('Option 16', '16'),
    getItem('Option 17', '17'),
  ]),
  getItem('Home, Pet & Appliances', 'sub7', <SettingOutlined />, [
    getItem('Option 18', '18'),
    getItem('Option 19', '19'),
  ]),
];

export default function Categories() {
  const [allItems, setAllItems] = useState(null);

  const onClick = async (e) => {
    const allItems = await fetchRequest(e.keyPath[0]);
    setAllItems(allItems);
  };

  return (
    <>
      {/* <button onClick={() => console.log(answer)}>СТЭЙТ</button> */}
      <AllCards allItems={allItems} />
      <Menu
        onClick={onClick}
        style={{
          width: 200,
          borderRadius: '5px',
        }}
        mode="vertical"
        items={items}
      />
    </>
  );
}
