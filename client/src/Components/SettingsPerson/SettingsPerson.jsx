import React, { useState } from "react";
import Categories from "../Categories/Categories";
import { Layout, Space, Spin, Carousel } from "antd";
import SliderCarousel from "../Carousel/Carousel";
import Person from "../Person/Person";
import {
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Menu } from "antd";
import WishList from "../WishList/WishList";
import Account from "../Account/Account";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import { useEffect } from "react";

const contentStyle = {
  width: "180px",
  height: "150px",
  // color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "gray",
};

export default function SettingsPerson() {
  const [loading, setLoading] = useState(true);
  const [itemsSlide, setItemsSlide] = useState({});
  const [findItem, setFindItem] = useState(false);
  const { Header, Footer, Sider, Content } = Layout;

  const spinner = (
    <div style={{ display: "flex", justifyContent: "center", height: "300px" }}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    </div>
  );

  useEffect(() => {
    (async function () {
      const userFindBack = await fetch("http://localhost:4000/find-slider", {
        method: "GET",
        credentials: "include",
      });
      const itemsAll = await userFindBack.json();
      if (itemsAll.lenght) {
        setFindItem(true);
        setItemsSlide(itemsAll);
      }
    })();
  }, []);

  // const i = Math.floor(Math.random() * (itemsSlide.length - 1) + 1);
  // console.log('123', i)

  setTimeout(() => {
    setLoading(false);
  }, 500);

  function getItem(label, key, children) {
    return {
      label,
      key,
      children,
    };
  }

  const items = [
    getItem(<Link to="/account/info">Account</Link>, 1),
    getItem(<Link to="/account/wish-list">Wish List</Link>, 2),
    getItem(<Link to="/account/orders">Orders</Link>, 3),
    getItem(<Link to="/account/cart">Cart</Link>, 4),
  ];

  return !loading ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "80%" }}>
        <Layout>
          <Sider
            style={{ background: "white", height: "100px" }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <Menu
              style={{
                borderRadius: "5px",
                boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
              }}
              theme="white"
              mode="inline"
              defaultSelectedKeys={["4"]}
              items={items}
              // {[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
              //   (icon, index) => ({
              //     key: String(index + 1),
              //     icon: React.createElement(icon),
              //     label: `nav ${index + 1}`,
              //   }),
              // )}
            />
          </Sider>
          <Layout>
            <Content
              style={{
                margin: "0px 16px",
                borderRadius: "10px",
              }}
            >
              <div
                className="site-layout-background"
                style={{
                  padding: 24,
                  minHeight: 360,
                  borderRadius: "5px",
                  boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                }}
              >
                <Outlet />
              </div>
            </Content>
            <Sider
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "white",
                height: "170px",
                backgroundColor: "white",
                borderRadius: "5px",
                boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
              }}
            >
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    backgroundColor: "red",
                    width: "180px",
                    height: "150px",
                    marginTop: "11px",
                  }}
                >
                  {/* //! Логика слайдера */}
                  {findItem ? (
                    <Carousel autoplay>
                      <div>
                        <img
                          src={itemsSlide[0]["Items.image"]}
                          style={contentStyle}
                        />
                      </div>
                      <div>
                        <img
                          src={itemsSlide[1]["Items.image"]}
                          style={contentStyle}
                        />
                      </div>
                      <div>
                        <img
                          src={itemsSlide[2]["Items.image"]}
                          style={contentStyle}
                        />
                      </div>
                      <div>
                        <img
                          src={itemsSlide[3]["Items.image"]}
                          style={contentStyle}
                        />
                      </div>
                    </Carousel>
                  ) : (
                    <Carousel autoplay>
                      <div>
                        <img style={contentStyle} />
                      </div>
                      <div>
                        <img style={contentStyle} />
                      </div>
                      <div>
                        <img style={contentStyle} />
                      </div>
                      <div>
                        <img style={contentStyle} />
                      </div>
                    </Carousel>
                  )}
                </div>
              </div>
            </Sider>
          </Layout>
        </Layout>
      </div>
    </div>
  ) : (
    spinner
  );
}
