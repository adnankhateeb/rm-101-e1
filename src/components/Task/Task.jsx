import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({ item, allTasks, index, handleStatus, handleRemove, handleCount }) => {
   // NOTE: do not delete `data-testid` key value pair
   return (
      <li data-testid="task" className={styles.task}>
         <div className="leftSide">
            <input
               type="checkbox"
               data-testid="task-checkbox"
               onClick={() => {
                  handleStatus(index);
               }}
               checked={item.done ? "checked" : ""}
            />
            <div
               data-testid="task-text"
               style={
                  item.done
                     ? { textDecoration: "line-through" }
                     : { textDecoration: "none" }
               }
            >
               {item.text}
            </div>
         </div>
         <div className="rightSide">
            {/* Counter here */}
            <div className="miniRight">
               <Counter item={item} handleCount={handleCount} index={index} />
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
