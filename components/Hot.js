import { useEffect } from "react";
import styles from "./Hot.module.css";

const sendHot = () => {
  fetch(`${process.env.NEXT_PUBLIC_API_URL}/hot`, {
    method: "POST",
  })
    .catch((error) => {
      console.error(error);
    });
};

const Hot = (props) => {
  const socket = props.socket;
  return (
    <div className={styles.button} onClick={sendHot}>
      <img className={styles.heart} src="/hot.png" alt="hot"/>
    </div>
  );
}
export default Hot;
