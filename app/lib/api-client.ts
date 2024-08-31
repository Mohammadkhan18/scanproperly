import axios from "axios";
const config = {
  baseURL: `http://localhost:8000/api/`,
  // headers: {
  //   "content-type": "application/json",
  // },
};

export const api = axios.create(config);
