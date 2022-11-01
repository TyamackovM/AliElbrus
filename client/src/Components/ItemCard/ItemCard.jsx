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
          <div style={{ display: "flex", flexDirection: "column" }}>
            Small images
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
      <div  className="lower part"></div>
    </div>
  );
}
