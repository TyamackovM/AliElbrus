import React, { useState } from "react";
import Categories from "../Categories/Categories";
import { Layout, Space, Spin } from "antd";
import SliderCarousel from "../Carousel/Carousel";
import Person from "../Person/Person";

export default function SettingsPerson() {
  const [loading, setLoading] = useState(true);
  const { Header, Footer, Sider, Content } = Layout;

  const spinner = (
    <div style={{display: 'flex', justifyContent: 'center', height: '300px'}}>
      <div style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    </div>
  );

  setTimeout(() => {
    setLoading(false)
  }, 1000)

  return (
    !loading ? (
      <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "85%" }}>
        <Layout>
          <Sider
            style={{
              boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
          >
            <Categories />
          </Sider>
          <Layout>
            <Content
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 10px",
              }}
            >
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#fffafa",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                }}
              >
                <SliderCarousel />
              </div>
            </Content>
            <Footer style={{ padding: "60px 0px", margin: "0px 10px" }}>
              <div
                style={{
                  backgroundColor: "#fffafa",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                }}
              >
                <p>123</p>
              </div>
            </Footer>
          </Layout>
        </Layout>
      </div>
    </div>
    ) : (
      spinner
    )
   
  );
}
