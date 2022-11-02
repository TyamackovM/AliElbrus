import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styles from './AllCards.module.css';
import { Avatar, Card } from 'antd';
import React from 'react';
import OneCard from './OneCard';
const { Meta } = Card;

export default function AllCards({ allItems }) {

  return (
    <div className={styles.mainDiv}>

      {allItems?.map((el) => <OneCard el={el} key={el['Items.id']} />)}

    </div>
  );
}
