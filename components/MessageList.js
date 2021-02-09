import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import socketIOClient from "socket.io-client";
import Message from "./Message"; 
import styles from "./MessageList.module.css"

const ENDPOINT = "ws://localhost:5000";

// TODO: Hot or not component


const MessageList = (props) => {
  const socket = props.socket;

  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages((prevMessages)=> [...prevMessages, message])
    console.log("Her", message);
  };

  // Get messages from server
  const getMessages = () => {
    fetch(MESSAGE_SERVER, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((messages) => {
        messages.forEach(addMessage);
      });
  };

  // Listen to server for new messages
  useEffect(() => {
    socket.on("message", addMessage);

    // To avoid memory leak
    return () => socket.off("message", addMessage);
  }, []);

  return (
    <div className={styles.frame}>
    <div className={styles.list}>
    {messages.map((message) => <Message message={message} />)}
      {/* 
      Dev 
      <button onClick={testAddMessage}>hnn</button>
    */}
    </div>
    </div>
  );
}
export default MessageList;
