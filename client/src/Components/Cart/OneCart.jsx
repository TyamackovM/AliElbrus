import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import React from "react";
const { Meta } = Card;
// const data = [
//   {
//     title: "Ant Design Title 1",
//   },
//   {
//     title: "Ant Design Title 2",
//   },
//   {
//     title: "Ant Design Title 3",
//   },
//   {
//     title: "Ant Design Title 4",
//   },
// ];
export default function OneCart({ el }) {
  return (
    <Card
      style={{
        width: 300,
      }}
    >
      <Meta
        avatar={<Avatar src={el["Item.image"]} />}
        title={el["Item.title"]}
        description={"$" + el["Item.price"]}
      />
      <DeleteOutlined />
    </Card>
  );
}
