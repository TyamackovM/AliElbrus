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
  const selectCardHandler = (event) => {
    console.log(event);
  };

  return (
    <Card
      key={el.id}
      onClick={selectCardHandler}
      style={{
        width: 200,
        borderRadius: '5px',
        boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)"
      }}
      cover={<img alt="Items_image" style={{borderRadius: '5px 5px 0px 0px',}} src={el.image} />}

      // actions={[
      //  <EllipsisOutlined key="ellipsis" />,
      // ]}
    >
      <div className={styles.card_bottom}>
        <span className={styles.price}>{"$" + el.price}</span>
        <div className={styles.heart}>
          <HeartOutlined className={styles.icon_card_heart} />
        </div>
        <ShoppingCartOutlined style={{ fontSize: "22px", color: "grey" }} />
      </div>
    </Card>
  );
}
