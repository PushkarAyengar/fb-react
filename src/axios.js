import axios from "axios";
const instance = axios.create({
  baseURL: " https://fb-mern-live-clone.herokuapp.com",
});

export default instance;
