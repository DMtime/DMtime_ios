import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../../../config/config";

export const getRequestWithAccessToken = async () => {
  AsyncStorage.setItem(
    "accessToken",
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTgyOTc4NTksIm5iZiI6MTYxODI5Nzg1OSwianRpIjoiOWNlYzE0NzktYjZmZC00Mjc4LWE1OTUtMGY4OWE1NzBiZDZmIiwiZXhwIjoxNjE4Mjk4NzU5LCJpZGVudGl0eSI6InBhbmRhdGlAZHNtLmhzLmtyIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIiwidXNlcl9jbGFpbXMiOnsicm9sZXMiOiJwZWFzYW50In19.jJZ-KwwsJE0AWobTrmKLlx0qeODpvNdrX_BEQcCR4Ao"
  );
  const accessToken = await AsyncStorage.getItem("accessToken");
  return axios.create({
    baseURL: config.BASE_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getRequest = () =>
  axios.create({
    baseURL: config.BASE_URL,
  });
