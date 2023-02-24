import React from "react";
import user from "../../../assets/images/user.png";

import "./MessageUser2.scss";

const MessageUser2 = ({ text }) => {
  return (
    <div className="message message--user-2">
      <img src={user} alt="user1-avatar" />
      <div className="message__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MessageUser2;
