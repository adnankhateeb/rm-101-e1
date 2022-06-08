import React, { useEffect, useState } from "react";
import AddTask from "./AddTask/AddTask";
import data from "../data/tasks.json";
import { nanoid } from "nanoid";

import styles from "./taskApp.module.css";

import { TaskHeader } from "./TaskHeader";
import Tasks from "./Tasks/Tasks";

const TaskApp = () => {
   const [allTasks, setAllTasks] = useState([]);
   const [render, setRerender] = useState(false);
   const handleStatus = (idx) => {
      allTasks[idx].done = !allTasks[idx].done;
      setRerender(!render);
   };
   const handleRemove = (idx) => {
      allTasks.splice(idx, 1);
      setRerender(!render);
   };
   const handleAdd = (text) => {
      let id = nanoid(3);
      let todo = { id: id, text: text, done: false, count: 1 };
      allTasks.push(todo);
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
         />
      </div>
   );
};

export default TaskApp;
