import React from "react";

export default function ItemCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      ItemCard
      <div
        className="upper part"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div
          className="images"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div>
            <img
              src="https://estatemebel.ru/wp-content/uploads/6/c/a/6cae746cfe089c8a1c0b4f6db4fb81be.jpeg"
              alt=""
              style={{ height: "480px", width: "640px" }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ height: "55px", width: "64px" }}
              src="https://pp.userapi.com/c824504/v824504631/a126/iIpRKHlia1k.jpg"
              alt="Small"
            />
            <img
              style={{ height: "55px", width: "64px" }}
              src="https://pp.userapi.com/c824504/v824504631/a126/iIpRKHlia1k.jpg"
              alt="Small"
            />
            <img
              style={{ height: "55px", width: "64px" }}
              src="https://pp.userapi.com/c824504/v824504631/a126/iIpRKHlia1k.jpg"
              alt="Small"
            />
            <img
              style={{ height: "55px", width: "64px" }}
              src="https://pp.userapi.com/c824504/v824504631/a126/iIpRKHlia1k.jpg"
              alt="Small"
            />
            <img
              style={{ height: "55px", width: "64px" }}
              src="https://pp.userapi.com/c824504/v824504631/a126/iIpRKHlia1k.jpg"
              alt="Small"
            />
          </div>
        </div>
        <div
          className="product-info"
          style={{ display: "flex", flexDirection: "column" }}
        >
          BMAX S13A 13.3 Inch FHD Display Intel Celeron Processor N3350 8GB RAM
          128GB 256GB SSD Windows 10 System Laptop
          <div>
            Info-1
            <div className="uniform-banner">
              <div
                className="uniform-banner-slogan"
                style={{ color: 'black' }}
              >
                Grab a great discount today
              </div>
              <div
                className="uniform-banner-box"
              >
                <div>
                  <span className="uniform-banner-box-price">
                    8&nbsp;875,31 грн.
                  </span>
                  <span class="uniform-banner-box-discounts">
                    <span style={{ textDecoration: 'line-through' }}>
                      14&nbsp;087,71 грн.
                    </span>
                    &nbsp;&nbsp;<span>-37%</span>
                  </span>
                </div>
                <div className="uniform-banner-box-right">
                  <div>
                    <img
                      style={{
                          height: "16px",
                          display: "block",
                          margin: "0px auto",
                        }}
                        src="https://ae01.alicdn.com/kf/S8ed43f4f668342bf9884aed696371f44d/316x32.png"
                        alt="123"
                    />
                  </div>
                  <div class="countDown  count-down-timer">
                    <span className="before-text">Ends in</span>
                    <div class="timer">13 нояб., 09:59 EET</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>Info-2</div>
          <div>Info-3</div>
          <div>Info-4</div>
          <div>Info-5</div>
        </div>
      </div>
      <div
        className="lower part"
        style={{ display: "flex", flexDirection: "column" }}
      >
        Detail-container
        <div>Detail-1</div>
        <div>Detail-2</div>
        <div>Detail-3</div>
        <div>Detail-4</div>
        <div>Detail-5</div>
      </div>
    </div>
  );
}
