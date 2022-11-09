import React, { useState } from "react";
import { Card, Rate, Button } from "antd";
import styles from "./ItemCard.module.css";
import { useLocation } from "react-router-dom";
import FormFilter from "../Cards/FormFilter";
import { addItem } from "../../store/cart/actionCreators";
import { useDispatch, useSelector } from "react-redux";
import checkItem from "../../helpers/checkItem";

export default function ItemCard() {
  const user_id = useSelector((state) => state.user.id);
  const dispatch = useDispatch(); 
  const location = useLocation();
  const [item, setItem] = useState(location.state.el);
  
  if(item.item_id){
    (   async function check() {
      console.log(4444444);
      const result = await checkItem({item_id: item.item_id})
      console.log('ggooo', result);
      // const resultToback = await result.json();
      setItem(result)
      console.log('898989', item);
    })()
  }

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = useState(3);

  const [quantity, setQuantity] = useState(1);

  function quantityMinus() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function quantityPlus() {
    if (quantity >= 0) {
      setQuantity(quantity + 1);
    }
  }

  const cartHandler = async (event) => {

    dispatch(addItem(quantity));
    await fetch("http://localhost:4000/add-many-item-to-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id, item_id: item.id, quantity }),
      credentials: "include",
    });
  };

  const tabListNoTitle = [
    {
      key: "article",
      tab: "DESCRIPTION",
    },
    {
      key: "app",
      tab: "CUSTOMER REWIEWS",
    },
    {
      key: "project",
      tab: "SPECIFICATIONS",
    },
  ];
  const contentListNoTitle = {
    article: (
      <div>
        <img
          src={item.image}
          style={{ maxHeight: "500px", maxWidth: "880px" }}
          alt="img"
        />
      </div>
    ),
    app: (
      <div>
        <span>
          <Rate tooltips={desc} onChange={setValue} value={value} />
          {value ? (
            <span className="ant-rate-text">{desc[value - 1]}</span>
          ) : (
            ""
          )}
        </span>
        <div style={{ marginTop: "20px" }}>
          Comments:
          <p>
            I 've been very fond of computers in the family, but I 've been in
            one volume in the past, but the performance is very good. Good, face
            value is fine, and all kinds of games are full. 22 Oct 2022 04:42
          </p>
          <p>
            Very Good, The Courier is very fast, the computer is new, mouse pad,
            mouse, bag also sent, it's very good, the computer is very good. 22
            Oct 2022 04:44
          </p>
          <p>
            The computer is very cool, the execution does not break at all, the
            view is very good, mainly because this screen is really, really
            loved, its own system software, which is particularly good feeling
            without a border, is very convenient to use. This purchase is very
            satisfactory. 22 Oct 2022 04:46
          </p>
        </div>
      </div>
    ),
    project: (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center ",
        }}
      >
        <div style={{ width: "440px" }}>
          Brand Name: BMAXPort: 2*USB3.0Video Memory Capacity: 8GBDisplay Size:
          13.3"Display Ratio: 16:9Type: UltraslimDimensions (WxHxD):
          317mm*215mm*20.0mmOperating System: Windows 10Origin: Mainland
          ChinaGraphics
        </div>
        <div style={{ width: "440px" }}>
          Card Model: Intel UHD 605Hard Drive Type: MixureScreen Refresh Rate:
          60HzHard Drive Capacity: 128GBWeight (Battery Included): ＜1.5KgCPU
          Brand/Model: Intel Celeron N3350Panel Type: IPSRAM: 8GBBody Material:
          AluminiumThickness: 15mm- 18mmFeature: bluetoothDisplay resolution:
          1920x1080
        </div>
      </div>
    ),
  };

  const [activeTabKey2, setActiveTabKey2] = useState("app");

  const onTab2Change = (key) => {
    setActiveTabKey2(key);
  };




  return (
    <div
      className="itemCard"
      style={{ justifyContent: "center", display: "flex", marginTop: "20px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "65%" }}>
        <div
          className="upper part"
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center ",
            justifyContent: "center",
          }}
        >
          <div
            className="images"
            style={{
              display: "flex",
              flexDirection: "column",
              boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
              borderRadius: "5px",
            }}
          >
            <div>
              <img
                src={item.image}
                alt=""
                style={{ height: "450px", width: "350px" }}
              />
            </div>
          </div>
          <div
            className="product-info"
            style={{
              display: "flex",
              flexDirection: "column",
              // marginLeft: "10px",
              boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
              borderRadius: "5px",
            }}
          >
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "80%", fontSize: "15px" }}>{item.title}</div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "80%",
                  fontSize: "25px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div className={styles.price}>
                  <div >
                    <div style={{ marginTop: "15px",  }}>{item.price}$</div>

                    </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginTop: "20px",
                      // marginLeft: "20px",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ width: "80%", fontSize: "15px" }}>
                      {item.size ? (
                        <div name="size">Size: {item.size}</div>
                      ) : (
                        ""
                      )}
                      {item.color ? (
                        <div name="color">Color: {item.color}</div>
                      ) : (
                        ""
                      )}
                      {item.brand ? (
                        <div name="brand">Brand: {item.brand}</div>
                      ) : (
                        ""
                      )}
                      {item.processor ? (
                        <div name="processor">Processor: {item.processor}</div>
                      ) : (
                        ""
                      )}
                      {item.display ? (
                        <div name="display">Display: {item.display}</div>
                      ) : (
                        ""
                      )}
                      {item.gender ? (
                        <div name="gender">Gender: {item.gender}</div>
                      ) : (
                        ""
                      )}
                      {item.style ? (
                        <div name="style">Style: {item.style}</div>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      style={{
                        marginTop: "20px",
                        fontSize: "15px",
                        display: "flex",
                      }}
                    >
                      <div>
                        <p>Quantity:</p>
                        <Button
                          className={styles.btnReg}
                          onClick={quantityMinus}
                          style={{ marginRight: "15px" }}
                        >
                          -
                        </Button>
                        {quantity}
                        <Button
                          className={styles.btnReg}
                          onClick={quantityPlus}
                          style={{ marginLeft: "15px" }}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                    <div style={{ marginTop: "20px"}}>
                      <Button
                      onClick={cartHandler}
                        className={styles.btnReg}
                        style={{ marginLeft: "3px" }}
                      >
                        Add cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="lower part"
          style={{
            display: "flex",
            marginTop: "10px",
            flexDirection: "column",
            boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
            borderRadius: "5px",
          }}
        >
          <div>
            <Card
              style={{
                width: "100%",
              }}
              tabList={tabListNoTitle}
              activeTabKey={activeTabKey2}
              tabBarExtraContent={<a href="#">More</a>}
              onTabChange={(key) => {
                onTab2Change(key);
              }}
            >
              {contentListNoTitle[activeTabKey2]}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
