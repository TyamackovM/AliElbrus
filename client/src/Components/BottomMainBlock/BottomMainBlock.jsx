import React from 'react'
import styles from "./BottomMainBlock.module.css";
import { addItem } from "../../store/cart/actionCreators";
import { useSelector, useDispatch } from "react-redux";
import {
  EditOutlined,
  HeartOutlined,
  BarsOutlined,
  EllipsisOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

export default function BottomMainBlock() {
  return (
    <Card
      key={1}
      style={{
        width: "150px",
        height: "200px",
        borderRadius: "5px",
        boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
        margin: '10px 0px 10px 0px'
      }}
      cover={
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '10px', }}>
          <div style={{width: '130px', height: '150px'}}>
        <img
          className={styles.image}

          alt="Items_image"
          style={{
            borderRadius: "5px 5px 5px 5px",
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          src='http://localhost:4000/img/EBC-sweatshirt.jpg'
        />
        </div>
        </div>
      }
    >

      <div style={{display: 'flex', justifyContent: 'center'}} className={styles.card_bottom}>
        <span style={{fontWeight: 'bold', fontSize: '20px'}} className={styles.price}>{"$"}</span>
        <div name="heart" className={styles.heart}>
          </div>
      </div>
    </Card>
  )
}
