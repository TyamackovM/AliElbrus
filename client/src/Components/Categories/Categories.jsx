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
  getItem('КАТЕГОРИЯ 1', 'sub1', <MailOutlined />, [
    getItem('Item 1', null, null, [getItem('ываываы', '1'), getItem('Oйцайца', '2')], 'group'),
    getItem('Item 2', null, null, [getItem('ыыыыыы', '3'), getItem('фыайц 4', '4')], 'group'),
  ]),
  getItem('КАТЕГОРИЯ 2', 'sub2', <AppstoreOutlined />, [
    getItem('файафыа', '5'),
    getItem('йцфыафыа', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('КАТЕГОРИЯ 3', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
  ]),
];
const onClick = (e) => {
  console.log('click', e);
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
