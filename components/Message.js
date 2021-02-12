import MessageStyle from "./Message.module.css";
import myMessageStyle from "./MyMessage.module.css";

const Message = (props) => {
    const styles = props.message.name === sessionStorage.getItem("name") ? myMessageStyle: MessageStyle;

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