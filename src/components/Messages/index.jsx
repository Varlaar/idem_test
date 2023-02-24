import React from "react";
import MessageUser from "./MessageUser";

import "./Messages.scss";

const Messages = () => {
  const USERS = [
    "Это означает, что в Вашем доме, офисе, кабинете, мастерской хранятся ценности бóльшие, чем просто деньги или драгоценности, - культурные ценности. Произведения искусства, антиквариат, иные предметы коллекционирования – все это имущество, безусловно высокая стоимость которого.",
    "доме, офисе, кабинете, мастерской",
    "Это означает,",
  ];

  return (
    <section className="messages">
      <MessageUser isOwner={true} text={USERS[0]} />
      <MessageUser isOwner={true} text={USERS[1]} />
      <MessageUser isOwner={false} text={USERS[2]} />
      <MessageUser isOwner={true} text={USERS[0]} />
      <MessageUser isOwner={true} text={USERS[1]} />
      <MessageUser isOwner={false} text={USERS[2]} />
      <MessageUser isOwner={true} text={USERS[0]} />
      <MessageUser isOwner={true} text={USERS[1]} />
      <MessageUser isOwner={false} text={USERS[2]} />
      <MessageUser isOwner={true} text={USERS[0]} />
      <MessageUser isOwner={true} text={USERS[1]} />
      <MessageUser isOwner={false} text={USERS[2]} />
      <MessageUser isOwner={true} text={USERS[0]} />
      <MessageUser isOwner={true} text={USERS[1]} />
      <MessageUser isOwner={false} text={USERS[2]} />
      <MessageUser isOwner={true} text={USERS[0]} />
      <MessageUser isOwner={false} text={USERS[2]} />
      <MessageUser isOwner={true} text={USERS[1]} />
      <div className="data">
        <span className="data__title">21 октября 2017</span>
      </div>
      <MessageUser isOwner={false} text={USERS[2]} />
      <MessageUser isOwner={true} text={USERS[1]} />
    </section>
  );
};

export default Messages;
