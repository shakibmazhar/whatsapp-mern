import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import SidebarChat from "./SidebarChat";
import { useAppContext } from "../context";

const Sidebar = () => {
    const { messages } = useAppContext();
    return (
        <div className="flex flex-col bg-gray-200 sidebar border-r border-gray-400">
            {/* Sidebar Header */}
            <div className="flex justify-between mt-2 ml-2 mr-2">
                {/* Header Left */}
                <div className="w-2/5">
                    <Avatar />
                </div>
                {/* Header Right */}
                <div className="flex items-center justify-evenly w-3/5">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            {/* Search Container */}
            <div className="bg-white m-2 rounded-md flex justify-evenly items-center">
                <SearchOutlinedIcon className="text-gray-500" />
                <input
                    id="sidebarSearch"
                    className="rounded-md w-10/12 border-none outline-none"
                    type="text"
                    placeholder="Search or start a new chat"
                />
            </div>
            {/* Sidebar Chat Container */}
            <div className="flex flex-col m-2">
                <SidebarChat
                    name="Chat Room"
                    lastTxt={messages[messages.length - 1].message}
                    img="https://www.clipartmax.com/png/middle/405-4050774_avatar-icon-flat-icon-shop-download-free-icons-for-avatar-icon-flat.png"
                />
            </div>
        </div>
    );
};

export default Sidebar;
