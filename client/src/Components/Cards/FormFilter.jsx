import React from "react";
import styles from "./AllCards.module.css";

export default function FormFilter({ array, handler, name }) {
  return (
    <div className={styles.div_color}>
      <div className={styles.div_span}>
        <span className={styles.span}>{name}</span>
      </div>
      <div className={styles.div_content}>
        <form>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {array.map((el) => (
              <div>
                <input
                  id={el}
                  type="radio"
                  onChange={handler}
                  value={el}
                  name={name}
                />
                <label for={el}>{el}</label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
