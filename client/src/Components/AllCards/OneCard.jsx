import React from 'react';
import {
  EditOutlined,
  SettingOutlined,
  TagOutlined,
  BarsOutlined,
  EllipsisOutlined
} from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default function OneCard({ el }) {
  const selectCardHandler = (event) => {
    console.log(event);
  };

  return (
    <Card
      key={el['Items.id']}
      onClick={selectCardHandler}
      style={{
        width: 300,
      }}
      cover={<img alt="123123123123" src={el['Items.image']} />}
      actions={
        <>
          [<EllipsisOutlined key="ellipsis" />]{' '}
          <span>{'$' + el['Items.price']}</span>
        </>
      }
    >
      <EllipsisOutlined />
    </Card>
  );
}
