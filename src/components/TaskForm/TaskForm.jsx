import { useState } from "react";

import { IonIcon } from "@ionic/react";
import { clipboard } from "ionicons/icons";

import styles from "./TaskForm.module.css";

export const TaskForm = ({handleTaskFormSubmit }) => {
    const [task,setTask] = useState("");

  return (
    <form className={styles.formContainer}
      onSubmit={(e) => {
        e.preventDefault();
        handleTaskFormSubmit ({ content: task, id: crypto.randomUUID() });
      }}
    >
      <input className={styles.inputField} defaultValue={task} onChange={(e) => {setTask(e.target.value)}} type="text" name="task" placeholder="Task..." />
      <span className={styles.iconContainer}><IonIcon icon={clipboard}></IonIcon></span>
      <button className={styles.button} disabled={task.length === 0}>Save</button>
    </form>
  );
};
