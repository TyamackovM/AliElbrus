import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import OneWishList from "./OneWishList";
import styles from "../Cards/AllCards.module.css";

// import { useParams } from "react-router-dom";

export default function WishList() {
  const user_id = useSelector((state) => state.user.id);

  const [cart, setCart] = useState();
  useEffect(() => {
    (async function () {
      const response = await fetch("http://localhost:4000/display-wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id }),
        credentials: "include",
      });
      const result = await response.json();

      setCart(result.wishList);
    })();
  }, []);
  console.log(cart);

  return (
    <div className={styles.mainDiv}>
      {cart?.map((el) => (
        <OneWishList el={el} key={el.id} />
      ))}
    </div>
  );
}
