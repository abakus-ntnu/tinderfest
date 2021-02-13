import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';
import Message from './Message';
import styles from './MessageList.module.css';

const MessageList = (props) => {
  const socket = props.socket;

  const listRef = useRef();

  const [messages, setMessages] = useState([]);
  const [noOverflow, setNoOverflow] = useState(true);

  const addMessage = (message) => {
    const maxMessages = 50;

    const oldBottom =
      listRef.current.scrollHeight - listRef.current.clientHeight;

    setMessages((prevMessages) =>
      prevMessages.length <= maxMessages
        ? [...prevMessages, message]
        : [...prevMessages.shift(), message],
    );
    setNoOverflow(messages < maxMessages);

    if (noOverflow) {
      const bottom =
        listRef.current.scrollHeight - listRef.current.clientHeight;

      if (listRef.current.scrollTop >= oldBottom - 150)
        listRef.current.scrollTo(0, bottom);
    }
  };

  useEffect(() => {
    socket.on('message', addMessage);
    return () => socket.off('message', addMessage);
  }, []);

  return (
    <div>
      <div className={styles.messageListHeader}>
        <h2 className={styles.chatH2}>#chat</h2>
      </div>
      <div className={styles.frame}>
        <div className={styles.list} ref={listRef}>
          {messages.map((message, i) => (
            <Message key={i} message={message} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MessageList;
