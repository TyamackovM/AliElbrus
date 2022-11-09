import React, { useState } from "react";
import styles from "./OneCard.module.css";
import { addItem, deleteItem } from "../../store/cart/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import {
  EditOutlined,
  HeartOutlined,
  BarsOutlined,
  EllipsisOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

export default function SearchRenderOneCard({ el }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.user.id);
  const [likeFill, setLikeFill] = useState(el.liked ? true : false);

  const selectCardHandler = async (event) => {};

  const likeHandler = async (event) => {
    if (!likeFill) {
      setLikeFill(!likeFill);
      console.log("like!!");
      const response = await fetch(
        "http://localhost:4000/add-item-to-wish-list",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id, item_id: el.id }),
          credentials: "include",
        }
      );
    }

    if (likeFill) {
      setLikeFill(!likeFill);
      const response = await fetch(
        "http://localhost:4000/delete-item-from-wish-list",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_id, item_id: el.id }),
          credentials: "include",
        }
      );
    }
  };

  const cartHandler = async (event) => {
    //setItemId(+event.target.parentNode.parentNode.id);
    const response = await fetch("http://localhost:4000/add-item-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, item_id: el.id }),
      credentials: "include",
    });
   dispatch(addItem(1));
  };
  
  function clickId() {
  navigate('/item-card', {state: {el}})
}
  return (
    <Card
      key={el.id}
      onClick={selectCardHandler}
      style={{
        width: "170px",
        height: "270px",
        borderRadius: "5px",
        boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
      }}
      cover={
        <img
        onClick={clickId}
          className={styles.image}
          alt="Items_image"
          style={{
            borderRadius: "5px 5px 0px 0px",
            width: "170px",
            height: "210px",
            cursor: 'pointer'
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
                onClick={likeHandler}
                style={{ color: "red" }}
                className={styles.icon_card_heart}
              />
            ) : (
              <HeartOutlined
                onClick={likeHandler}
                className={styles.icon_card_heart}
              />
            )}
          </button>
        </div>
        <ShoppingCartOutlined
          onClick={cartHandler}
          style={{ fontSize: "22px", color: "grey" }}
        />
      </div>
    </Card>
  );

}
