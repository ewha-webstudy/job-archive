import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 100000,

});

API.defaults.headers.common['authorization'] = localStorage.getItem('token');


export default API;
