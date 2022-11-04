import { useLocation } from "react-router-dom";
import OneCard from "./OneCard";
import styles from "./AllCards.module.css";
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Layout } from "antd";
import { Space, Spin } from "antd";
import { Pagination } from "antd";
import { Checkbox, Col, Row } from "antd";
import { Button, Form, Input, Radio } from "antd";
import SearchRenderOneCard from "./SearchRenderOneCard";
import { v4 as uuidv4 } from "uuid";
const { Header, Footer, Sider, Content } = Layout;

export default function SearchRenderAllCards() {
  const [loading, setLoading] = useState(true);
  const [loadingSort, setLoadingSort] = useState(true);
  const [checkTag, setCheckTag] = useState({});
  const location = useLocation();
  const [items, setItems] = useState(location.state.searchResult);
  

  const handler = async (event) => {
    console.log(event.target.name);
    console.log(event.target.innerText);
    setCheckTag({...checkTag, [event.target.name]: event.target.innerText});
    console.log('checkTag', checkTag)
    const response = await fetch("http://localhost:4000/check-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: location.state.searchWord,
        check: {...checkTag, [event.target.name]: event.target.innerText},
        // property: event.target.name,
        // tag: event.target.innerText,
      }),
    });
    const responseToJSON = await response.json();
    setLoadingSort(false);
    setTimeout(() => {
      setLoadingSort(true);
    }, 500);
    setItems(responseToJSON);
  };

  const testHandler = (event) => {
    setCheckTag({...checkTag, [event.target.name]: event.target.innerText})
    console.log('checkTag', checkTag)
  }

  const mouseHandler = (event) => {
    setCheckTag({...checkTag, [event.target.name]: event.target.innerText})
    console.log('checkTagMouse', checkTag)
  }



  setTimeout(() => {
    setLoading(false);
  }, 500);

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("");
  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

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

  const spinnerSort = (
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



  const filter = location.state.searchResult
    .filter((el) => el.color)
    .map((el) => el.color);
  const filter2 = location.state.searchResult
    .filter((el) => el.size)
    .map((el) => el.size);
  const arr = [...new Set(filter)];
  const arr2 = [...new Set(filter2)];

  // const itemsArray = location.state.searchResult;
  return !loading ? (
    <>
      {/* <div> */}
      {/* {arr.map((el) => (
          <button onClick={handler}>{el}</button>
        ))}
      </div>
      <div>
        {arr2.map((el) => (
          <button onClick={handler}>{el}</button>
        ))}
      </div>
      <div>
        {items.map((el) => (
          <div>{el.color}</div>
        ))} */}
      {/* </div> */}
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div style={{ width: "85%" }}>
          <Layout>
            <Sider
              style={{
                boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                borderRadius: "5px",
                backgroundColor: "white",
                height: "565px",
                position: "sticky",
                top: "55px",
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
                        {arr2.map((el) => (
                          // <Col span={8}>
                          //   <Checkbox value={el}>{el}</Checkbox>
                          // </Col>
                          <button name='size' onClick={handler} key={uuidv4()}>
                            {el}
                          </button>
                        ))}
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
                        {arr.map((el) => (
                          // <Col span={8}>
                          //   <Checkbox value={el}>{el}</Checkbox>
                          // </Col>
                          <button name='color' onClick={handler} key={uuidv4()}>
                            {el}
                          </button>
                        ))}
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
                {!loadingSort ? (
                  spinnerSort
                ) : (
                  <div className={styles.mainDiv}>
                    {items?.map((el) => (
                      <SearchRenderOneCard el={el} key={el.id} />
                    ))}
                  </div>
                )}
              </Content>
              <Footer style={{ textAlign: "center", marginTop: "50px" }}>
                <Pagination defaultCurrent={1} total={50} />
              </Footer>
            </Layout>
          </Layout>
        </div>
      </div>
    </>
  ) : (
    spinner
  );
}
