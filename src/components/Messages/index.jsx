import React from "react";
import MessageUser1 from "./MessageUser1";
import MessageUser2 from "./MessageUser2";

import "./Messages.scss";

const Messages = () => {
  const user1 = {
    text1:
      "Это означает, что в Вашем доме, офисе, кабинете, мастерской хранятся ценности бóльшие, чем просто деньги или драгоценности, - культурные ценности. Произведения искусства, антиквариат, иные предметы коллекционирования – все это имущество, безусловно высокая стоимость которого.",
    text2: "доме, офисе, кабинете, мастерской",
  };

  const user2 = {
    text: "Это означает,",
  };

  return (
    <section className="messages">
      <MessageUser1 text={user1.text1} />
      <MessageUser2 text={user2.text} />
      <MessageUser1 text={user1.text2} />
      <MessageUser1 text={user1.text1} />
      <MessageUser2 text={user2.text} />
      <MessageUser1 text={user1.text2} />
      <MessageUser1 text={user1.text1} />
      <MessageUser2 text={user2.text} />
      <MessageUser1 text={user1.text2} />
      <MessageUser1 text={user1.text1} />
      <div className="data">
        <span className="data__title">21 октября 2017</span>
      </div>
      <MessageUser2 text={user2.text} />
      <MessageUser1 text={user1.text2} />
    </section>
  );
};

export default Messages;
