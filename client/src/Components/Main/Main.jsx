import React from "react";
import Categories from "../Categories/Categories";
import { Layout } from "antd";
import SliderCarousel from "../Carousel/Carousel";
import Person from "../Person/Person";

export default function Main() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <div style={{width: '80%'}}>
      <Layout style={{backgroundColor: 'white'}}>
        <Sider style={{boxShadow: '1px 1px 1px 1px rgba(167, 167, 167, 0.596)', borderRadius: '5px', backgroundColor: 'white'}}>
          <Categories />
        </Sider>
        <Content style={{backgroundColor: 'white', margin: '0 10px'}}>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', boxShadow: '1px 1px 1px 1px rgba(167, 167, 167, 0.596)', }}>
            <SliderCarousel />
          </div>
        </Content>
        <Sider style={{backgroundColor: 'white', borderRadius: '5px', boxShadow: '1px 1px 1px 1px rgba(167, 167, 167, 0.596)'}}>
          <Person />
        </Sider>
      </Layout>
    </div>
    </div>
  );
}
