import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

import React from 'react';
import { Link } from 'react-router-dom';

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
  getItem(<Link to='/account'>Account</Link> ),
  getItem(<Link to='/wish-list'>Wish List</Link>),
];

const MenuPerson = () => (
  <Menu
    
    style={{
      width: 200,
      borderRadius: '5px'
    }}
    mode="vertical"
    items={items}
    
  />
);
export default MenuPerson;
