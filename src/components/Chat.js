import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import ChatMessage from "./ChatMessage";
import SendIcon from "@material-ui/icons/Send";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import { useAppContext } from "../context";
import axios from "../axios";

const Chat = () => {
    const { messages, monthString } = useAppContext();

    const postData = async (e) => {
        const date = new Date();
        const time = date.toLocaleTimeString();
        const day = date.getDay() + 1;
        const month = monthString[date.getMonth() + 1];
        if (e.target.elements[0].value) {
            await axios.post("/new", {
                name: "Maz",
                message: e.target.elements[0].value,
                timestamp: `${time}, ${day.toString()} ${month}`,
                received: false,
            });
        }
    };

    const sendText = (e) => {
        e.preventDefault();
        postData(e);
        e.target.elements[0].value = "";
    };

    return (
        <div className="flex flex-col chat max-h-full">
            {/* Chat Header */}
            <div className="bg-white border-b border-gray-400">
                <div className="flex items-center justify-between m-2">
                    {/* Avatar */}
                    <Avatar />
                    {/* Chat info container */}
                    <div className="flex-1 ml-2 mr-2">
                        <h4 className="text-lg font-semibold">Chat Room</h4>
                        <p className="text-sm">Last seen at...</p>
                    </div>
                    {/* Icons Container */}
                    <div>
                        <IconButton>
                            <SearchOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <AttachFileIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </div>
            </div>
            {/* Chat Body */}
            <div className="chat_body flex-1 overflow-scroll p-7">
                {messages.map((item) => {
                    const { _id, name, message, timestamp, received } = item;
                    return (
                        <ChatMessage
                            key={_id}
                            name={name}
                            message={message}
                            timestamp={timestamp}
                            received={received}
                        />
                    );
                })}
            </div>
            {/* Send Message Container */}
            <div className="flex ml-2 mr-2 items-center justify-evenly">
                {/* Emoticon button */}
                <div className="mr-2">
                    <IconButton>
                        <InsertEmoticonIcon />
                    </IconButton>
                </div>
                {/* Input Field */}
                <div className="rounded-md flex-1">
                    <form
                        className="flex items-center justify-between"
                        onSubmit={(e) => sendText(e)}
                    >
                        <input
                            id="textField"
                            className="outline-none ml-2 flex-1 p-1 rounded-md"
                            type="text"
                            placeholder="Write your message"
                        />

                        <button type="submit">
                            <SendIcon />
                        </button>
                    </form>
                </div>
                {/* Icon container */}
                <div className="ml-2">
                    <IconButton>
                        <MicIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
};

export default Chat;
