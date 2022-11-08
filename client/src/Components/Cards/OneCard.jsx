import React from "react";
import styles from "./OneCard.module.css";
import { useSelector } from "react-redux";
import {
  EditOutlined,
  HeartOutlined,
  BarsOutlined,
  EllipsisOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useState } from "react";
const { Meta } = Card;

export default function OneCard({ el }) {
  const user_id = useSelector((state) => state.user.id);
  const [likeFill, setLikeFill] = useState(el.liked ? true : false);

  const selectCardHandler = async (event) => {
    event.preventDefault();

    const item_id = +event.target.parentNode.parentNode.id;

    if (
      !likeFill &&
      event.target.tagName === "svg" &&
      event.target.parentNode.parentNode.tagName === "BUTTON"
    ) {
      setLikeFill(!likeFill);
      console.log('like!!');
      const response = await fetch(
        "http://localhost:4000/add-item-to-wish-list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id, item_id }),
          credentials: "include",
        }
      );
    } else {
      setLikeFill(!likeFill);
      const response = await fetch(
        "http://localhost:4000/delete-item-from-wish-list",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id, item_id }),
          credentials: "include",
        }
      );
    }
  };

  return (
    <Card
      key={el.id}
      onClick={selectCardHandler}
      style={{
        width: "200px",
        height: "347px",
        borderRadius: "5px",
        boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
      }}
      cover={
        <img
          className={styles.image}
          alt="Items_image"
          style={{
            borderRadius: "5px 5px 0px 0px",
            width: "200px",
            height: "260px",
          }}
          src={el.image}
        />
      }
    >
      <div className={styles.card_bottom}>
        <span className={styles.price}>{"$" + el.price}</span>
        <div name="heart" className={styles.heart}>
        <button
          id={el.id}
          style={{
            border: "0px",
            background: "none",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {likeFill ? (
            <HeartOutlined
              style={{ color: "red" }}
              className={styles.icon_card_heart}
            />
          ) : (
            <HeartOutlined className={styles.icon_card_heart} />
          )}
        </button>
      </div>
        <ShoppingCartOutlined style={{ fontSize: "22px", color: "grey" }} />
      </div>
    
    </Card>
  );
}
