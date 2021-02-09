import { useEffect } from "react";
import styles from "./Not.module.css";

const Not = (props) => {
  const socket = props.socket;

  let sendNot = () => {
    socket.emit("not");
  };

  return (
    <div className={styles.button} onClick={sendNot}>
    </div>
  );
}
export default Not;