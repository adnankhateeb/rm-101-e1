import { createContext } from "react";
import { useState, useEffect } from "react";
import data from "../data/tasks.json";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
   const [allTasks, setAllTasks] = useState([]);
   useEffect(() => {
      setAllTasks(data);
   }, []);

   return (
      <TodoContext.Provider value={{ allTasks }}>
         {children}
      </TodoContext.Provider>
   );
};
