import styles from "./Message.module.css"

const Message = (props) => {
    console.log(props);
    const avatarLink = "/" + props.message.avatar + ".png";
    return (<div className={styles.message}>
        <img className={styles.picture} src={avatarLink}/>
        <div className={styles.content}>
            <div className={styles.name}>{props.message.name}</div>
            <div className={styles.text}>{props.message.text}</div>
        </div>
    </div>);
}
export default Message;