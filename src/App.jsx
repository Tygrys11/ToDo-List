import { useState } from "react";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskInfo } from "./components/TaskInfo/TaskInfo";

import { IonIcon } from "@ionic/react";
import { addOutline } from "ionicons/icons";

import styles from "./App.module.css";
import "./index.css";

const Tasks = [
  {
    content: "Spakować się",
    id: crypto.randomUUID(),
  },
  {
    content: "Zrobić miniaturkę",
    id: crypto.randomUUID(),
  },
];

function App() {
  const [taskFormShown, setTaskFormShown] = useState(false);
  const [tasks, setTasks] = useState(Tasks);

  const handleShownFormClick = () => setTaskFormShown(true);

  const addTask = (data) => {
    const newTask = [...tasks, data];
    setTasks(newTask);
    setTaskFormShown(false);
  };

  return (
    <>
      <div className={styles.wrapper}>
      <h1 className={styles.title}>꧁•⊹٭ToDo List٭⊹•꧂</h1><br />
      {taskFormShown ? (
        <TaskForm handleTaskFormSubmit={addTask} />
      ) : (
        <button className={styles.button} onClick={handleShownFormClick}>
          <IonIcon icon={addOutline} />
        </button>
      )}
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <TaskInfo key={task.id} content={task.content} />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;
