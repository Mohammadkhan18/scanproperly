import axios from "axios";
const config = {
  baseURL: `http://3.80.169.41/api/`,
  // headers: {
  //   "content-type": "application/json",
  // },
};

export const api = axios.create(config);
