import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task";

const Tasks = ({ allTasks, handleStatus, handleRemove, handleAdd }) => {
   // NOTE: do not delete `data-testid` key value pair

   return (
      <>
         {allTasks.length ? (
            <ul data-testid="tasks" className={styles.tasks}>
               {/* Task List */}
               {allTasks.map((el, i) => (
                  <Task
                     item={el}
                     allTasks={allTasks}
                     key={el.id}
                     index={i}
                     handleStatus={handleStatus}
                     handleRemove={handleRemove}
                     handleAdd={handleAdd}
                  />
               ))}
            </ul>
         ) : (
            <div data-testid="tasks-empty" className={styles.empty}>
               No Tasks Left
            </div>
         )}
      </>
   );
};

export default Tasks;
