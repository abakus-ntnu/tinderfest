// TODO: Empty Message filter

import { useEffect, useState } from "react";
import styles from "./MessageInput.module.css";

const MESSAGE_SERVER = "http://localhost:5000/messages";

const MessageInput = () => {
  const [inputText, setInputText] = useState("");
  const [username, setUsername] = useState("");
  const [usernameExists, setUsernameExists] = useState(false);

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleInputTextKeyDown = (event) => {
    if (event.key === "Enter") sendMessage();
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUsernameSubmit = (event) => {
    sessionStorage.setItem("name", username);
    setUsernameExists(true);
    event.preventDefault();
  };

  useEffect(() => {
    if (sessionStorage.getItem("name")) {
      setUsername(sessionStorage.getItem("name"));
      setUsernameExists(true);
    }
  }, []);

  const handleMessageSubmit = (event) => {
    // Cannot send empty message
    if (!inputText) {
      event.preventDefault(); 
      return;
    } 

    fetch(MESSAGE_SERVER, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        text: inputText,
      }),
    })
      .then()
      .catch((error) => {
        console.error(error);
      });
    setInputText("");
    event.preventDefault();
  };

  return (
    <div>
      {!usernameExists && (
        <form onSubmit={handleUsernameSubmit}>
          <label>
            <input
              type="text"
              value={username}
              placeholder="Navn"
              onChange={handleUsernameChange}
              className={styles.field}
            />
          </label>
          <input type="submit" value="Sett brukernavn" />
        </form>
      )}
      {usernameExists && (
        <form onSubmit={handleMessageSubmit}>
          <label>
            <input
              type="text"
              value={inputText}
              placeholder="melding ..."
              onChange={handleInputTextChange}
              // onKeyDown={handleInputTextKeyDown}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
}
export default MessageInput;
