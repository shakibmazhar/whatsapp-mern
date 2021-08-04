import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:9000/api/v1/messages",
});

export default instance;
