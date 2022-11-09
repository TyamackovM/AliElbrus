import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initItem, addItem } from "../../store/cart/actionCreators";
const { Meta } = Card;

export default function OneCart({ el }) {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.user.id);
  const [display, setDisplay] = useState(true);

  const deleteHandler = async (event) => {
    console.log("click!!!!");
    const response = await fetch("http://localhost:4000/display-cart", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, item_id: el.item_id }),
      credentials: "include",
    });
    const result = await response.json();
    if (result) {
      setDisplay(false);
    }
    dispatch(initItem(result.cart.length));
  };
  return (
    <>
      {display ? (
        <Card
          style={{
            width: 300,
          }}
        >
          <>
            <Meta
              avatar={<Avatar src={el["Item.image"]} />}
              title={el["Item.title"]}
              description={"$" + el["Item.price"]}
            />
            <DeleteOutlined onClick={deleteHandler} />
          </>
        </Card>
      ) : null}
    </>
  );
}
