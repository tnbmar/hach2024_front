import { COOKIES } from "@/constants/cookies";
import axios, { AxiosRequestConfig } from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = "https://api.tnbmar.ru/api";

axios.interceptors.request.use((req) => {
  if (!req.headers.Authorization) {
    req.headers.Authorization = Cookies.get(COOKIES.TOKEN);
  }

  return req;
});

axios.interceptors.response.use((res) => {
  const token = res.headers["Authorization"];

  if (token) {
    Cookies.set(COOKIES.TOKEN, token);
  }

  return res;
});

const httpClient = <T>({
  method = "GET",
  url,
  data,
  params,
  headers,
}: AxiosRequestConfig) =>
  axios<T>({
    method,
    url,
    data,
    params,
    headers: {
      ...headers,
    },
  });

export default httpClient;
