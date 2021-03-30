import axios from "axios";
import { AsyncStorage } from "react-native";

export const getRequestWithAccessToken = () =>
  axios.create({
    baseURL: "https://dminside.kro.kr/api/v1",
    headers: {
      Authorization: `Bearer ${AsyncStorage.getItem("accessToken")}`,
    },
  });

export const getRequest = () =>
  axios.create({
    baseURL: "https://dminside.kro.kr/api/v1",
  });
