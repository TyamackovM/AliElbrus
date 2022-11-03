import styles from "./AllCards.module.css";
import React from "react";
import OneCard from "./OneCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchRequest } from "../Categories/fetchRequest";

export default function AllCards() {
  const [allItems, setAllItems] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    (async function () {
      const allItems = await fetchRequest(id);
      setAllItems(allItems);
    })();
  }, []);

  return (
    <div className={styles.mainDiv}>
      {allItems?.map((el) => (
        <OneCard el={el} key={el["Items.id"]} />
      ))}
    </div>
  );
}
