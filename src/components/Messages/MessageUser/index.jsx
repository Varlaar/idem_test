import React from "react";
import user from "../../../assets/images/user.png";
import arrow from "../../../assets/images/arrow.png";

import "./MessageUser.scss";

const MessageUser = ({ text, isOwner }) => {
  return (
    <>
      {isOwner ? (
        <div className="message message--user-1">
          <img src={user} alt="user2-avatar" />
          <img className="message__arrow" src={arrow} alt="arrow" />
          <div className="message__text">
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <div className="message message--user-2">
          <img src={user} alt="user1-avatar" />
          <img
            className="message__arrow message__arrow_left"
            src={arrow}
            alt="arrow"
          />
          <div className="message__text">
            <p>{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageUser;
