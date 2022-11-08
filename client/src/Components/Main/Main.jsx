import React, { useState } from "react";
import Categories from "../Categories/Categories";
import { Layout, Skeleton, Space, Spin } from "antd";
import SliderCarousel from "../Carousel/Carousel";
import Person from "../Person/Person";
import RandomCards from "../RandomCards/RandomCards";

export default function Main() {
  const [loading, setLoading] = useState(true);
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

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return !loading ? (
    <div style={{ display: "flex", justifyContent: "center",}}>
      <div style={{ width: "80%" }}>
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
                  padding: '5px'
                }}
              >
                <SliderCarousel />
              </div>
            </Content>
            <Footer style={{  padding: "0px 0px", margin: "10px 10px 0px 10px" }}>
              <div
                style={{
                  backgroundColor: "white",
                  // background: '4520ab',
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "5px",
                  boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                  // padding: '5px',
                }}
              >
                {/* <div> */}
                  <img style={{width: '550px', height: '150px', }} src='/img/newblock.png' />
                  {/* </div> */}
              </div>
            </Footer>
          </Layout>
          <Sider
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#fffafa",
              borderRadius: "5px",
              boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
            }}
          >
            <Person />
          </Sider>
        </Layout>
        <Layout>
          <Content
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px 0px",
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
              <RandomCards />
            </div>
          </Content>
        </Layout>
      </div>
    </div>
  ) : (
    spinner
  );
}
