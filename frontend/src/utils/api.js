import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 100000,

});

API.defaults.headers.common['authorization'] = localStorage.getItem('token');

// request interceptor
API.interceptors.request.use(function(config){
  config.headers.authorization = localStorage.getItem('token');
  return config
}, function(error){
  console.error(error);
  return Promise.reject(error)
})

// response interceptor
API.interceptors.response.use(function(response){
  console.log("interceptor response");
  localStorage.setItem('token', response.data.token);


}, function(error){
  console.error(error);
  return Promise.reject(error)
})


export default API;
