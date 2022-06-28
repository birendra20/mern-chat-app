import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChat = async () => {
    const { data } = await axios.get("/api/chat");
    setChats(data);
    console.log(data);
  };

  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <div>
      {chats.map((chat) => {
        return <div key={chat._id}>{chat.chatName}</div>;
      })}
      hello
    </div>
  );
};

export default ChatPage;
