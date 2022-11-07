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
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import filterMap from "../../helpers/filterMapFunction";
import FormFilter from "./FormFilter";
const { Header, Footer, Sider, Content } = Layout;

export default function AllCards() {
  const [allItems, setAllItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingSort, setLoadingSort] = useState(true);
  const [checkTag, setCheckTag] = useState({});
  const [arrSize, setArrSize] = useState();
  const [arrColor, setArrColor] = useState();
  const [filterItems, setFilterItems] = useState();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      (async function () {
        const allItems = await getAllCardsFetch(id);
        setAllItems(allItems);
        setFilterItems(allItems);
      })();
    }
  }, [id]);

  const handler = async (event) => {
    setCheckTag({ ...checkTag, [event.target.name]: event.target.value });
    // console.log("checkTag", checkTag);
    const response = await fetch("http://localhost:4000/filter-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        check: { ...checkTag, [event.target.name]: event.target.value },
      }),
    });
    const responseToJSON = await response.json();
    setLoadingSort(false);
    setTimeout(() => {
      setLoadingSort(true);
    }, 500);
    setAllItems(responseToJSON);
  };

  const sortLowHandler = (e) => {
    const spred = [...allItems];
    const sort = spred.sort((min, max) => min.price - max.price);
    setAllItems(sort);
  };

  const sortHighHandler = (e) => {
    const spred = [...allItems];
    const sort = spred.sort((min, max) => max.price - min.price);
    setAllItems(sort);
  };

  useEffect(() => {
    if (filterItems) {
      const res = filterMap(filterItems);
      setArrSize(res.size);
      setArrColor(res.color);
    }
  }, [filterItems]);

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
              position: "sticky",
              top: "55px",
              // widht: '50px'
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
                    <Radio.Button onClick={sortLowHandler}>Low</Radio.Button>
                    <Radio.Button onClick={sortHighHandler}>High</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </Form>
              <FormFilter array={arrSize} name="size" handler={handler} />

              <FormFilter array={arrColor} name="color" handler={handler} />
            </div>
          </Sider>
          <Layout>
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
                  {allItems?.map((el) => (
                    <OneCard el={el} key={el.id} />
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
  ) : (
    spinner
  );
}

//fgdfgfdgfgfdg
