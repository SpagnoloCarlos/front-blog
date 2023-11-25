import axios from "axios";

export const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_PATH,
  timeout: 30000,
  headers: {
    Accept: "*/*",
  },
});
