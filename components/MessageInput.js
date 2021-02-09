// TODO: Empty Message filter

import { useState } from "react";

const MESSAGE_SERVER = "http://localhost:5000/messages";

const MessageInput = () => {
  const [inputText, setInputText] = useState("");
  const [username, setUsername] = useState("");

  const handleInputTextChange = (event) => {
    setInputText(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleInputTextKeyDown = (event) => {
    if (event.key === "Enter") sendMessage();
  };

  const sendMessage = () => {
    // Handle no name and message with no text

    // Cannot send empty message
    if (!inputText) return;

    fetch(MESSAGE_SERVER, {
      method: "POST",
      headers: {
        "Accept": "application/json",
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
  };

  return (
    <div>
      <label>
        Navn:
        <input
          type="text"
          value={username}
          name="username"
          onChange={handleUsernameChange}
        />
      </label>
      <label>
        Melding:
        <input
          type="text"
          value={inputText}
          name="inputText"
          onChange={handleInputTextChange}
          onKeyDown={handleInputTextKeyDown}
        />
      </label>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
export default MessageInput;
