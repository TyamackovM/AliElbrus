import React from "react";
import OrderMessage from "./OrderMessage";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import OneOrder from "./OneOrder";

export default function Orders() {
  const user_id = useSelector((state) => state.user.id);
  const [order, setOrder] = useState();

  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:4000/display-orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id }),
        credentials: "include",
      });
      const result = await response.json();
      console.log(result.orders);
      console.log("ORDERS!!!!", result);
      setOrder(result.orders);
    })();
  }, []);
  return (
    <>
      <div>
        <OrderMessage />
      </div>
      <div>
        {order?.map((el) => (
          <OneOrder el={el} key={el.id} />
        ))}
      </div>
    </>
  );
}
