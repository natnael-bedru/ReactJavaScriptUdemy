//Module level styling 
import styles from './stylesheet/TaskCard.module.css';

export const TaskCard = ({task, handleDelete}) => {
  return (
    <div className={styles.taskcard}>
      <li className={task.completed ? `${styles.completed}` : `${styles.incomplete}`}>
      <span>
        {task.id} - {task.name}
      </span>
      <button onClick={() => handleDelete(task.id)} className={`${styles.delete}`}>
        Delete
      </button>
    </li>
    </div>
    
  );
};
