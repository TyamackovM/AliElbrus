import styles from "./AllCards.module.css";
import React from "react";
import OneCard from "./OneCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCardsFetch } from "../../helpers/getAllCardsFetch";
import { Layout } from "antd";
import { Space, Spin } from "antd";
import { Pagination } from "antd";
import { Checkbox, Col, Row } from "antd";
import { Button, Form, Input, Radio } from "antd";
const { Header, Footer, Sider, Content } = Layout;

export default function AllCards() {
  const [allItems, setAllItems] = useState(null);
  const [loading, setLoading] = useState(true);

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

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      (async function () {
        const allItems = await getAllCardsFetch(id);
        setAllItems(allItems);
      })();
    }
  }, [id]);

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return !loading ? (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
    >
      <div style={{ width: "80%" }}>
        <Layout>
          <Sider
            style={{
              boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
              borderRadius: "5px",
              backgroundColor: "white",
              height: "565px",
              position: 'sticky',
              top: '55px',
            }}
          >
            <div className={styles.sider_div}>
              <Form
                form={form}
                layout="vertical"
                initialValues={{
                  requiredMarkValue: requiredMark,
                }}
                onValuesChange={onRequiredTypeChange}
                requiredMark={requiredMark}
              >
                <Form.Item>
                  <div className={styles.div_span}>
                    <span className={styles.span}>Sort by price</span>
                  </div>
                  <Radio.Group>
                    <Radio.Button value="optional">Low</Radio.Button>
                    <Radio.Button value>High</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Form>
              <div className={styles.div_size}>
                <div className={styles.div_span}>
                  <span className={styles.span}>Size</span>
                </div>
                <div className={styles.content}>
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChange}
                  >
                    <Col>
                      <Col span={8}>
                        <Checkbox value="A">XS</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="B">S</Checkbox>
                      </Col>

                      <Col span={8}>
                        <Checkbox value="C">M</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="D">L</Checkbox>
                      </Col>

                      <Col span={8}>
                        <Checkbox value="E">XL</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="F">XXL</Checkbox>
                      </Col>
                    </Col>
                  </Checkbox.Group>
                </div>
              </div>
              <div className={styles.div_color}>
                <div className={styles.div_span}>
                  <span className={styles.span}>Color</span>
                </div>
                <div className={styles.div_content}>
                  <Checkbox.Group
                    style={{
                      width: "100%",
                    }}
                    onChange={onChange}
                  >
                    <Col>
                      <Col span={8}>
                        <Checkbox value="A">Black</Checkbox>
                      </Col>

                      <Col span={8}>
                        <Checkbox value="B">White</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="C">Blue</Checkbox>
                      </Col>

                      <Col span={8}>
                        <Checkbox value="D">Yellow</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="E">Red</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="F">Brown</Checkbox>
                      </Col>
                      <Col span={8}>
                        <Checkbox value="G">Grey</Checkbox>
                      </Col>
                    </Col>
                  </Checkbox.Group>
                </div>
              </div>
            </div>
          </Sider>
          <Layout>
            {/* <Header
              style={{
                boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                borderRadius: "5px",
                backgroundColor: "white",
                marginLeft: "40px",
                height: "80px",
              }}
            ></Header> */}
            <Content
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 10px",
              }}
            >
              <div className={styles.mainDiv}>
                {allItems?.map((el) => (
                  <OneCard el={el} key={el["Items.id"]} />
                ))}
              </div>
            </Content>
            <Footer style={{ textAlign: "center", marginTop: "50px" }}>
              <Pagination defaultCurrent={1} total={50} />
            </Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  ) : (
    spinner
  );
}
