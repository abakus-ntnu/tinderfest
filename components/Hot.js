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
    </div>
  );
}
export default Hot;
