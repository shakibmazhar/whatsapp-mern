import { Avatar } from "@material-ui/core";
import React from "react";

const SidebarChat = ({ name, lastTxt, img }) => {
    return (
        <div className="flex items-center mb-2 transition-all ease-in duration-300 hover:bg-gray-400 rounded-md p-2">
            <Avatar src={img} />
            <div className="flex flex-col ml-2">
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm">{lastTxt}</p>
            </div>
        </div>
    );
};

export default SidebarChat;
