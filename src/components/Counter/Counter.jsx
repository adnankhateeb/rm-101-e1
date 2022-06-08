import React from "react";
import styles from "./counter.module.css";

const Counter = ({ item, handleCount, index }) => {
   // sample value to be replaced

   // NOTE: do not delete `data-testid` key value pair
   return (
      <div className={styles.counter}>
         <button
            data-testid="task-counter-increment-button"
            onClick={() => {
               handleCount(index, 1);
            }}
         >
            +
         </button>
         <span data-testid="task-counter-value">{item.count}</span>
         <button
            data-testid="task-counter-decrement-button"
            onClick={() => {
               handleCount(index, -1);
            }}
         >
            -
         </button>
      </div>
   );
};

export default Counter;
