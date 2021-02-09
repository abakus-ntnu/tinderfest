import { useEffect } from "react";
import styles from "./Hot.module.css";

export default function Hot(props) {
  const socket = props.socket;

  let sendHot = () => {
    socket.emit("hot");
  };

  return (
    <div className={styles.button} onClick={sendHot}>
    </div>
  );
}
