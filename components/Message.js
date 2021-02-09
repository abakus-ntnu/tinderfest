import styles from "./Message.module.css"

const Message = (props) => {
    console.log(props);
    return (<div className={styles.message}>
        <div className={styles.picture}></div>
        <div className={styles.content}>
            <div className={styles.name}>{props.message.name}</div>
            <div className={styles.text}>{props.message.text}</div>
        </div>
    </div>);
}
export default Message;