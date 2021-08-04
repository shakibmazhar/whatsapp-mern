import React from "react";

const ChatMessage = ({ name, message, timestamp, received }) => {
    return (
        <p className={`chat_message ${received ? "" : "chat_receiver"}`}>
            <span className="text-xs chat_bodySpanName">{name}</span>
            {message}
            <span className="text-xs block opacity-50">{timestamp}</span>
        </p>
    );
};

export default ChatMessage;
