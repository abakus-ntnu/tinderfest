import { useEffect } from "react";
import styles from "./Hot.module.css";

const Hot = (props) => {
  const socket = props.socket;

  let sendHot = () => {
    socket.emit("hot");
  };

  return (
    <div className={styles.button} onClick={sendHot}>
    </div>
  );
}
export default Hot;
