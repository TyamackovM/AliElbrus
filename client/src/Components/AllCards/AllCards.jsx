import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import styles from './AllCards.module.css';
import { Avatar, Card } from 'antd';
import React from 'react';
const { Meta } = Card;

export default function AllCards({ allItems }) {


  const selectCardHandler = (event) => {
    console.log(event);

  }

  return (
    <div className={styles.mainDiv}>
      {allItems?.map((el) => {
        console.log('el: ', el);
        return (
          <Card key={el["Items.id"]}

            onClick={selectCardHandler}

            style={{
              width: 300,
            }}
            cover={<img alt="123123123123" src={el["Items.image"]} />}
            // actions={[
            //   <SettingOutlined key="setting" />,
            //   <EditOutlined key="edit" />,
            //   <EllipsisOutlined key="ellipsis" />,
            // ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={'$' + el["Items.price"]}
              description="This is the description"
            />
          </Card>
        );
      })}
    </div>
  );
}
