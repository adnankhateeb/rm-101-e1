import React, { useEffect } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ allTasks }) => {
   console.log("allTasks:", allTasks)
   // sample values to be replaced
   let totalTask = allTasks.length;
   let unCompletedTask = 0;

   allTasks.map((e) => {
      if (!e.done) {
         unCompletedTask += 1;
      }
      return unCompletedTask;
   });

   // NOTE: do not delete `data-testid` key value pair
   return (
      <div data-testid="task-header" className={styles.taskHeader}>
         <h1>Todo List</h1>
         You have <b data-testid="header-remaining-task">
            {unCompletedTask}
         </b>{" "}
         of <b data-testid="header-total-task">{totalTask}</b> tasks remaining
      </div>
   );
};

export default TaskHeader;
