import React, { useState } from "react";
import { Card, Rate, Button } from "antd";
import styles from './ItemCard.module.css'

export default function ItemCard() {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = useState(3);
  
  const [quantity, setQuantity] = useState(1);



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
          src="https://ae01.alicdn.com/kf/S10fb6f2842074a02befb1438309551d9Z.jpg"
          style={{ height: "500px", width: "880px" }}
          alt="img"
        />
        <img
          src="https://ae01.alicdn.com/kf/H5ca3dd1db69e45249d4d073824de4419y.jpg"
          style={{ height: "500px", width: "880px", marginTop: "5px" }}
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
      style={{ justifyContent: "center", display: "flex", marginTop: "10px" }}
    >
      <div
        style={{ display: "flex", flexDirection: "column", width: "80%" }}
      >
        <div
          className="upper part"
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center ",
            marginLeft: "10px",
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
                src="https://www.seoclerk.com/pics/622332-1P9ruQ1533837156.jpg"
                alt=""
                style={{ height: "420px", width: "640px" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img
                style={{
                  height: "55px",
                  width: "64px",
                  boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                  borderRadius: "5px",
                  marginLeft: "3px",
                }}
                src="https://ae01.alicdn.com/kf/He7a1a79551e34549bb6aa60604426ab1u.jpg_.webp"
                alt="Small"
              />
              <img
                style={{
                  height: "55px",
                  width: "64px",
                  boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                  borderRadius: "5px",
                  marginLeft: "3px",
                }}
                src="https://ae01.alicdn.com/kf/H641af7a4841445b1b09900815ad67b91S.jpg_.webp"
                alt="Small"
              />
              <img
                style={{
                  height: "55px",
                  width: "64px",
                  boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                  borderRadius: "5px",
                  marginLeft: "3px",
                }}
                src="https://ae01.alicdn.com/kf/Hfcfc14af7b95485d85da6ebf0ff02e62u.jpg_.webp"
                alt="Small"
              />
              <img
                style={{
                  height: "55px",
                  width: "64px",
                  boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                  borderRadius: "5px",
                  marginLeft: "3px",
                }}
                src="https://ae01.alicdn.com/kf/H4978ab939fee414a953b4a2bd54e269a9.jpg_.webp"
                alt="Small"
              />
              <img
                style={{
                  height: "55px",
                  width: "64px",
                  boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                  borderRadius: "5px",
                  marginLeft: "3px",
                }}
                src="https://ae01.alicdn.com/kf/H8ba6395b4a7b4316984601db583301efZ.jpg_.webp"
                alt="Small"
              />
            </div>
          </div>
          <div
            className="product-info"
            style={{
              display: "flex",
              marginTop: "20px",
              flexDirection: "column",
              marginLeft: "10px",
              boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
              borderRadius: "5px",
            }}
          >
            BMAX S13A 13.3 Inch FHD Display Intel Celeron Processor N3350 8GB
            RAM 128GB 256GB SSD Windows 10 System Laptop
            <div
              className={styles.price}
            >
              <p></p>
              2000$
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px",
                }}
              >
                <p>Color:</p>
                <img
                  style={{
                    height: "55px",
                    width: "64px",
                    boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                    borderRadius: "5px",
                    marginLeft: "3px",
                  }}
                  src="https://rynek.ru/files/products/51l8ji0ktol._sx425_.300x300.jpg?8c33423e7233e14746fa9a8c730559cb"
                  alt="Small"
                />
                <img
                  style={{
                    height: "55px",
                    width: "64px",
                    boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                    borderRadius: "5px",
                    marginLeft: "3px",
                  }}
                  src="https://fast-store.ru/image/cache/catalog/new/ce09a1df144a6f74d5723e38e7d51e3b-1200x800.jpg"
                  alt="Small"
                />
                <img
                  style={{
                    height: "55px",
                    width: "64px",
                    boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                    borderRadius: "5px",
                    marginLeft: "3px",
                  }}
                  src="https://avatars.mds.yandex.net/get-mpic/4529531/img_id7748686726389981995.jpeg/orig"
                  alt="Small"
                />
                <img
                  style={{
                    height: "55px",
                    width: "64px",
                    boxShadow: "1px 1px 1px 1px rgba(167, 167, 167, 0.596)",
                    borderRadius: "5px",
                    marginLeft: "3px",
                  }}
                  src="https://sc01.alicdn.com/kf/HTB1tXFdPpXXXXaHXXXXq6xXFXXX1.jpg"
                  alt="Small"
                />
              </div>
            </div>
            <div  style={{ marginTop: '20px' }}>
              <p>
              Quantity:
              </p>
            <Button className={styles.btnReg} onClick={() => setQuantity(quantity - 1)} style={{ marginRight: "15px" }}>-</Button>
            {quantity}
            <Button className={styles.btnReg}  onClick={() => setQuantity(quantity + 1)} style={{ marginLeft: "15px" }}>+</Button>
            </div>
            <div style={{ marginTop: '20px' }}>
              <Button className={styles.btnReg} >Buy now</Button>
              <Button className={styles.btnReg}  style={{ marginLeft: "3px" }}>
                Add card
              </Button>
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
              {/* <div>Detail-1</div>
        <div>Detail-2</div>
        <div>Detail-3</div>
        <div>Detail-4</div> */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
