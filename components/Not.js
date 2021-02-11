import { useEffect } from "react";
import styles from "./Not.module.css";

const sendNot = () => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/not`, {
    method: "POST",
  })
    .catch((error) => {
      console.log(error);
    });
}

const Not = (props) => {
  const socket = props.socket;
  return (
    <div className={styles.button} onClick={sendNot}>
      <img className={styles.x} src="/not.png"/>
    </div>
  );
}
export default Not;