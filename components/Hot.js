import { useEffect } from "react";
import styles from "./Hot.module.css";
import { socket } from "./socket.js";


export default function Hot(props) {
  const socket = props.socket;

  const moreHot = () => {
    console.log("hot");
  };

  let sendHot = () => {
    socket.emit("hot");
  };

  // Moved to HotReactionWindow
  // // Listen to server for new messages
  // useEffect(() => {
  //   socket.on("hot", moreHot);

  //   // To avoid memory leak
  //   return () => socket.off("hot", moreHot);
  // }, []);

  return (
    <div className={styles.button} onClick={sendHot}>
    </div>
  );
}
