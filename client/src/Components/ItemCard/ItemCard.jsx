import React from "react";

export default function ItemCard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      ItemCard
      <div className="upper part" style={{ display: "flex", flexDirection: "row" }}>
        <div  className="images" style={{ display: "flex", flexDirection: "column" }}>
          <div>
            Image big
            <img
              src="https://estatemebel.ru/wp-content/uploads/6/c/a/6cae746cfe089c8a1c0b4f6db4fb81be.jpeg"
              alt=""
              style={{ height: '480px', width: '640px' }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            Small images
            <img style={{ height: '55px', width: '64px' }} src="https://pp.userapi.com/c824504/v824504631/a126/iIpRKHlia1k.jpg" alt="Small" />
            <img style={{ height: '55px', width: '64px' }} src="https://pp.userapi.com/c824504/v824504631/a126/iIpRKHlia1k.jpg" alt="Small" />
            <img style={{ height: '55px', width: '64px' }} src="https://pp.userapi.com/c824504/v824504631/a126/iIpRKHlia1k.jpg" alt="Small" />
            <img style={{ height: '55px', width: '64px' }} src="https://pp.userapi.com/c824504/v824504631/a126/iIpRKHlia1k.jpg" alt="Small" />
            <img style={{ height: '55px', width: '64px' }} src="https://pp.userapi.com/c824504/v824504631/a126/iIpRKHlia1k.jpg" alt="Small" />
          </div>
        </div>
        <div  className="product-info" style={{ display: "flex", flexDirection: "column" }}>
            Product-info
            <div>Info-1</div>
            <div>Info-2</div>
            <div>Info-3</div>
            <div>Info-4</div>
            <div>Info-5</div>
        </div>
      </div>
      <div  className="lower part" style={{ display: "flex", flexDirection: "column" }}>
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
