import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

//Module level styling 
import styles from './stylesheet/TaskList.module.css';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Record React Lectures", completed: true },
    { id: 7825, name: "Edit React Lectures", completed: false },
    { id: 8391, name: "Watch Lectures", completed: false },
  ]);
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => id !== task.id));
  }
  // Inline level css styling
  const headerStyles = {
    color: show ? "#3D8361" : "#be3434",
    border: "2px solid #be3434",
    borderColor: show ? "#3D8361" : "#be3434",  
    borderRadius: '5px',
    padding: "20px",
  };

  return (
    <section className={styles.tasklist}>
      {/*Alternative: style={{color: show ? "#3D8361" : "#be3434",borderColor: show ? "#3D8361" : "#be3434"}} */}
      <h1 style={headerStyles}>Task List</h1>
      <ul>
        {/* Alternative: className={`${styles.tasklist__button} trigger`} */}
        <button onClick={() => setShow(!show)} className={styles.trigger} >
          {show ? "Hide" : "Show"}
        </button>

        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>

      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          maxime.
        </p>
      </BoxCard>

      <BoxCard result="alert">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          maxime.
        </p>
      </BoxCard>

    </section>
  );
};