import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ handleAdd }) => {
   // NOTE: do not delete `data-testid` key value pair
   const [formData, setFormData] = useState("");

   const handleChange = (e) => {
      setFormData(e.target.value);
   };
   const handleAddTodo = () => {
      console.log(formData);
      handleAdd(formData);
   };

   return (
      <div className={styles.todoForm}>
         <input
            data-testid="add-task-input"
            type="text"
            onChange={handleChange}
            placeholder={"Add task..."}
         />
         <button data-testid="add-task-button" onClick={handleAddTodo}>
            +
         </button>
      </div>
   );
};

export default AddTask;
