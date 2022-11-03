import React from "react";
import styles from "./OneCard.module.css";
import {
  EditOutlined,
  HeartOutlined,
  BarsOutlined,
  EllipsisOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;

export default function OneCard({ el }) {
  console.log('222222222: ', el);
  const selectCardHandler = (event) => {
    console.log(event);
  };

  return (
    <Card
      key={el["Items.id"]}
      onClick={selectCardHandler}
      style={{
        width: 200,
      }}
      cover={<img alt="123123123123" src={el["Items.image"]} />}

      // actions={[
      //  <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <div className={styles.card_bottom}>
        <span className={styles.price}>{"$" + el["Items.price"]}</span>
        <div className={styles.heart}>
          <HeartOutlined className={styles.icon_card_heart} />
        </div>
        <ShoppingCartOutlined style={{ fontSize: "22px", color: "grey" }} />
      </div>
    </Card>
  );
}
