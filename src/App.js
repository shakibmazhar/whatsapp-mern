import React, { useEffect } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import Pusher from "pusher-js";
import { useAppContext } from "./context";
import axios from "./axios";

function App() {
    const { messages, dispatch } = useAppContext();

    useEffect(() => {
        const fetchTexts = async () => {
            const messages = await axios.get("/sync");
            dispatch({
                type: "SET_MESSAGES",
                payload: messages.data,
            });
        };
        fetchTexts();
    }, []);

    useEffect(() => {
        const pusher = new Pusher("7d6929192cda159d6a8c", {
            cluster: "eu",
        });

        const channel = pusher.subscribe("messages");
        channel.bind("inserted", (newMessage) => {
            // alert(JSON.stringify(newMessage));
            dispatch({
                type: "SET_MESSAGES",
                payload: [...messages, newMessage],
            });
        });
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, [messages]);

    console.log(messages);

    return (
        <div className="grid place-items-center h-screen bg-gray-100">
            <div className="app_container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
}

export default App;
