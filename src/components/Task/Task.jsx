import React, { useEffect, useState } from "react";
import styles from "./task.module.css";

const Task = ({ item, allTasks, index, handleStatus, handleRemove }) => {
   console.log("allTasks:", allTasks);
   const [count, setCount] = useState(0);
   const [status, setStatus] = useState(false);
   const [todoText, setTodoText] = useState("");

   useEffect(() => {
      setCount(item.count);
      setStatus(item.done);
      setTodoText(item.text);
   }, []);
   // NOTE: do not delete `data-testid` key value pair
   return (
      <li data-testid="task" className={styles.task}>
         <div className="leftSide">
            <input
               type="checkbox"
               data-testid="task-checkbox"
               onClick={() => {
                  setStatus(!status);
                  handleStatus(index);
               }}
               checked={status ? "checked" : ""}
            />
            <div
               data-testid="task-text"
               style={
                  status
                     ? { textDecoration: "line-through" }
                     : { textDecoration: "none" }
               }
            >
               {todoText}
            </div>
         </div>
         <div className="rightSide">
            {/* Counter here */}
            <div className="miniRight">
               <button
                  data-testid="task-counter-increment-button"
                  onClick={() => {
                     setCount((p) => p + 1);
                  }}
               >
                  +
               </button>
               <span data-testid="task-counter-value">{count}</span>
               <button
                  data-testid="task-counter-decrement-button"
                  onClick={() => {
                     if (count === 0) {
                        return;
                     }
                     setCount((p) => p - 1);
                  }}
               >
                  -
               </button>
               <button
                  data-testid="task-remove-button"
                  onClick={() => handleRemove(index)}
               >
                  X
               </button>
            </div>
         </div>
      </li>
   );
};

export default Task;
