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
import filterMap from "../../helpers/filterMapFunction";
import FormFilter from "./FormFilter";
const { Header, Footer, Sider, Content } = Layout;

export default function SearchRenderAllCards() {
  const [loading, setLoading] = useState(true);
  const [loadingSort, setLoadingSort] = useState(true);
  const [checkTag, setCheckTag] = useState({});
  const location = useLocation();
  const [items, setItems] = useState(location.state.searchResult);
  const [filterTags, setFilterTags] = useState(location.state.searchResult)
  const [arrSize, setArrSize] = useState();
  const [arrColor, setArrColor] = useState();

  // const [valueCheck, setValueCheck] = useState(1);

  // const onChange = (e) => {
  //   console.log('radio checked', e.target.value);
  //   setValueCheck(e.target.value);
  // };

  const handler = async (event) => {
    setCheckTag({ ...checkTag, [event.target.name]: event.target.value });
    const response = await fetch("http://localhost:4000/check-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        value: location.state.searchWord,
        check: { ...checkTag, [event.target.name]: event.target.value },
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
    // setValueCheck(event.target.value);
    // console.log('1', checkTag)
  };

  const sortLowHandler = (e) => {
    const spred = [...items];
    const sort = spred.sort((min, max) => min.price - max.price);
    setItems(sort);
  };

  const sortHighHandler = (e) => {
    const spred = [...items];
    const sort = spred.sort((min, max) => max.price - min.price);
    setItems(sort);
  };

  const mouseHandler = (event) => {
    setCheckTag({ ...checkTag, [event.target.name]: event.target.innerText });
    console.log("checkTagMouse", checkTag);
  };

  setTimeout(() => {
    setLoading(false);
  }, 500);

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

  //! главный компонент

  // const res = filterMap(items);
  // setArrSize(res.size);
  // setArrColor(res.color);

  useEffect(() => {
    if (filterTags) {
      const res = filterMap(filterTags);
      setArrSize(res.size);
      setArrColor(res.color);
    }
  }, [filterTags]);

  // const filter = location.state.searchResult
  //   .filter((el) => el.color)
  //   .map((el) => el.color);
  // const filter2 = location.state.searchResult
  //   .filter((el) => el.size)
  //   .map((el) => el.size);
  // const arr = [...new Set(filter)];
  // const arr2 = [...new Set(filter2)];

  // const itemsArray = location.state.searchResult;
  return !loading ? (
    <>
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
                      <Radio.Button onClick={sortLowHandler} name="low">
                        Low
                      </Radio.Button>
                      <Radio.Button onClick={sortHighHandler} name="high">
                        High
                      </Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                </Form>

                <FormFilter array={arrSize} name="size" handler={handler} />

                <FormFilter array={arrColor} name="color" handler={handler} />

                {/* <div className={styles.div_size}>
                  <div className={styles.div_span}>
                    <span className={styles.span}>Size</span>
                  </div>
                  <div className={styles.content}>
                    <form>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {arr2.map((el) => (
                          <div>
                            <input
                              id={el}
                              type="radio"
                              onChange={handler}
                              value={el}
                              name="size"
                            />
                            <label for={el}>{el}</label>
                          </div>
                        ))}
                      </div>
                    </form>
                  </div>
                </div>
                <div className={styles.div_color}>
                  <div className={styles.div_span}>
                    <span className={styles.span}>Color</span>
                  </div>
                  <div className={styles.div_content}>
                    <form>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {arr.map((el) => (
                          <div>
                            <input
                              id={el}
                              type="radio"
                              onChange={handler}
                              value={el}
                              name="color"
                            />
                            <label for={el}>{el}</label>
                          </div>
                        ))}
                      </div>
                    </form>
                  </div>
                </div> */}
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
// asfafsfasasfasfa
