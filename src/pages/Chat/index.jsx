import React, { useState } from "react";
import { Messages } from "../../components";

import "./style.scss";

const Chat = () => {
  const [text, setText] = useState("");

  const handleClickSubmit = () => {
    alert("Сообщение отправлено");
    setText("");
  };

  const handleChangeText = ({ target: { value } }) => {
    setText(value);
  };

  return (
    <div className="chat">
      <Messages />
      <div className="chat-container">
        <textarea
          value={text}
          onChange={handleChangeText}
          className="chat__message-field"
          placeholder="Введите сообщение"
        ></textarea>
        <button
          onClick={handleClickSubmit}
          className="chat__bth-submit"
          type="submit"
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Chat;
