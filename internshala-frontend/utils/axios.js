import axios from "axios";


const instance = axios.create({
    baseURL: "http://localhost:8080/", // THE API (cloud function) URL
    withCredentials: true,
});

export default instance;