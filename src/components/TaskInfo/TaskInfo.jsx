import { useState } from "react";
import { IonIcon } from "@ionic/react";
import {
  checkmarkDone,
  create,
  trashBinOutline,
  ellipsisVerticalOutline,
} from "ionicons/icons";

import styles from "./TaskInfo.module.css";

export const TaskInfo = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [checkmarkShown, setCheckmarkShown] = useState(true);
  const [trashBinShown, setTrashBinShown] = useState(true);
  const [ellipsisVerticalShown, setellipsisVerticalShown] = useState(true);

  const [createShown, setCreateShown] = useState(true);

  const handleCheckmarkClick = () => {
    setIsCompleted(true); // Ustawia stan isCompleted na true, gdy kliknięty jest checkmark
    setCheckmarkShown(false); // Ukrywa przyciski po kliknięciu checkmark
  };

  const handleCreateClick = () => {
    setCreateShown(false);
  };

  const handleTrashBinClick = () => {
    setTrashBinShown(false);
    setIsVisible(false);
    setellipsisVerticalShown(false);
  };

  if (!isVisible) {
    return null; // Nie renderuj komponentu, jeśli isVisible jest false
  }

  return (
    <>
      <div
        className={styles.Tasks}
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
      >
        {ellipsisVerticalShown && (
          <IonIcon
            className={styles.ellipsisVerticalOutline}
            icon={ellipsisVerticalOutline}
          />
        )}
        <div className={styles.TaskContent}>{props.content} </div>
        <div className={styles.buttonContainer}>
          {checkmarkShown && (
            <>
              <button onClick={handleCheckmarkClick}>
                <IonIcon icon={checkmarkDone} />
              </button>
            </>
          )}
          {createShown && (
            <>
              <button onClick={handleCreateClick}>
                <IonIcon icon={create} />
              </button>
            </>
          )}
          {trashBinShown && (
            <>
              <button onClick={handleTrashBinClick}>
                <IonIcon icon={trashBinOutline} />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
