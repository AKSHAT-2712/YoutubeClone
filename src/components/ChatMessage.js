import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center">
      <img
        className="h-8"
        alt="user"
        src="https://www.shutterstock.com/image-vector/user-icon-person-profile-avatar-260nw-601713017.jpg"
      />
      <span className="font-bold whitespace-nowrap ml-1 p-1">{name}</span>
      <span className="ml-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
