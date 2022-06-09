import React, { useEffect, useState } from "react";
import AddTask from "./AddTask/AddTask";
import data from "../data/tasks.json";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
   const [allTasks, setAllTasks] = useState([]);
   const [render, setRerender] = useState(false);
   const [id, setId] = useState(allTasks.length);
   const handleStatus = (idx) => {
      allTasks[idx].done = !allTasks[idx].done;
      setRerender(!render);
   };
   const handleRemove = (idx) => {
      allTasks.splice(idx, 1);
      setRerender(!render);
   };
   const handleAdd = (text) => {
      let todo = { id: id, text: text, done: false, count: 1 };
      setId((p) => p + 1);
      for (let task of allTasks) {
         if (task.text === text) {
            return;
         }
      }
      allTasks.push(todo);
      setRerender(!render);
   };

   const handleCount = (i, val) => {
      if (val === -1 && allTasks[i].count === 0) {
         return;
      }
      allTasks[i].count += val;
      setRerender(!render);
   };

   useEffect(() => {
      setAllTasks(data);
   }, []);
   // NOTE: do not delete `data-testid` key value pair
   return (
      <div data-testid="task-app" className={styles.taskApp}>
         {/* Header */}
         <TaskHeader allTasks={allTasks} />
         <AddTask handleAdd={handleAdd} />
         <Tasks
            allTasks={allTasks}
            handleStatus={handleStatus}
            handleRemove={handleRemove}
            handleAdd={handleAdd}
            handleCount={handleCount}
         />
      </div>
   );
};

export default TaskApp;
