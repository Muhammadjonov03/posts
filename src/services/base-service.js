import axios from "axios";

const baseApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})

export default baseApi