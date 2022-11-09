import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";

const { Meta } = Card;

export default function OneOrder({ el }) {
  return (
    <>
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
        </>
      </Card>
    </>
  );
}
