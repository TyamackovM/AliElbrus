import { Button } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdressForm from './AdressForm'
import OneCart from "./OneCart";

export default function Cart() {
  const user_id = useSelector((state) => state.user.id);

  const [cart, setCart] = useState();
  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:4000/display-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id }),
        credentials: "include",
      });
      const result = await response.json();
      setCart(result.cart);
    })();
  }, []);


  return (
    <div>
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {cart?.map((el) => (
        <OneCart el={el} key={el.id} />
      ))}
    </div>
    <Link to='/account/address-form'>
      <Button>Buy items</Button>
    </Link>
    </div>
  )
}
