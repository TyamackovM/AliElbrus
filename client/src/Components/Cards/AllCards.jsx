import styles from './AllCards.module.css';
import React from 'react';
import OneCard from './OneCard';

export default function AllCards({ allItems }) {
  return (
    <div className={styles.mainDiv}>
      {allItems?.map((el) => (
        <OneCard el={el} key={el['Items.id']} />
      ))}
    </div>
  );
}
